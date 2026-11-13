
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

type RouterCtx = {
  path: string;
  navigate: (to: string) => void;
};

const Ctx = createContext<RouterCtx | null>(null);

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

function normalize(path: string) {
  if (!path) return "/";

  let pathname = path.split("?")[0].split("#")[0];

  if (
    BASE_PATH &&
    BASE_PATH !== "/" &&
    (pathname === BASE_PATH || pathname.startsWith(`${BASE_PATH}/`))
  ) {
    pathname = pathname.slice(BASE_PATH.length) || "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  return pathname || "/";
}

function withBasePath(path: string) {
  const target = normalize(path);
  return `${BASE_PATH}${target === "/" ? "/" : target}`;
}

export function Router({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() =>
    normalize(window.location.pathname)
  );

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname));

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    const target = normalize(to);
    const browserPath = withBasePath(target);

    if (browserPath !== window.location.pathname) {
      window.history.pushState({}, "", browserPath);
    }

    setPath(target);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useRouter() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRouter must be used within <Router>");
  return ctx;
}

export function useRoutePath() {
  return useRouter().path;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  return (
    <a
      href={withBasePath(to)}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate(to);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Routes({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function Route({
  path,
  element,
}: {
  path: string;
  element: ReactNode;
}) {
  const current = useRoutePath();

  if (normalize(path) !== current) return null;

  return <>{element}</>;
}
