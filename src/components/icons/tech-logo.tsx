import { type SVGProps } from "react";

export const ReactLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const TailwindLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" {...props}>
        <path fill="currentColor" d="M128 0C93.867 0 65.267 17.317 47.133 43.517c18.133-26.2 46.733-43.517 80.867-43.517s62.733 17.317 80.867 43.517C190.733 17.317 162.133 0 128 0zM47.133 43.517C13 43.517 0 63.85 0 89.483s13 45.967 47.133 45.967c34.134 0 62.734-17.316 80.867-43.516C110.067 65.75 81.267 43.517 47.133 43.517z"/>
    </svg>
);

export const NodejsLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M11.668 4.41a.57.57 0 0 1 .664 0l8.11 4.682a.57.57 0 0 1 .283.495v9.366a.57.57 0 0 1-.283.495l-8.11 4.682a.57.57 0 0 1-.664 0l-8.11-4.682a.57.57 0 0 1-.283-.495V9.587a.57.57 0 0 1 .283-.495l8.11-4.682zM12.02 2.37L3.91 7.053a.57.57 0 0 0-.283.495v9.366a.57.57 0 0 0 .283.495l8.11 4.682a.57.57 0 0 0 .664 0l8.11-4.682a.57.57 0 0 0 .283-.495V7.548a.57.57 0 0 0-.283-.495L12.02 2.37zM12 12.03a3.84 3.84 0 1 0 0-7.68 3.84 3.84 0 0 0 0 7.68zm0 1.14a4.98 4.98 0 1 1 0-9.96 4.98 4.98 0 0 1 0 9.96z"/>
    </svg>
);

export const GitLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M22.83 9.72l-3.32-3.32a.5.5 0 0 0-.71 0L17.38 8a.5.5 0 0 0 0 .71l2.06 2.06-2.6 2.6a2.36 2.36 0 0 1-1.68.69h-2.23v-4.1a2.36 2.36 0 0 1 .69-1.68l1.38-1.38a.5.5 0 0 0 0-.71L14.4 5.3a.5.5 0 0 0-.71 0l-1.38 1.38a2.36 2.36 0 0 1-1.68.69V3.24a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v4.13a2.36 2.36 0 0 1-1.68-.69L5.59 5.3a.5.5 0 0 0-.71 0L1.17 9.01a.5.5 0 0 0 0 .71l3.32 3.32a.5.5 0 0 0 .71 0l1.38-1.38a2.36 2.36 0 0 1 1.68-.69h4.46a2.36 2.36 0 0 1 1.68.69l1.38 1.38a.5.5 0 0 0 .71 0l3.32-3.32a.5.5 0 0 0 0-.71zM4.22 10.78L2.56 9.12l.6-.6 1.66 1.66zm.85-2.23l1.38-1.38a.5.5 0 0 0 0-.71L5.07 5a.5.5 0 0 0-.71 0L3.22 6.14a2.36 2.36 0 0 1-1.68.69H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.04a2.36 2.36 0 0 1 1.68-2.69zM6.65 14.4a.5.5 0 0 0 0 .71l1.38 1.38a2.36 2.36 0 0 1 .69 1.68v4.13a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4.1a2.36 2.36 0 0 1-.69-1.68L9.25 15.1a.5.5 0 0 0-.71 0z"/>
    </svg>
);

export const StrapiLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.385 5.56v4.881h13.23V5.56H1.385zM0 3.32h16v9.36H0V3.32zM7.942.5l-6.52 6.52v.172h3.555L7.942 4.23l2.965 2.965h3.556V7.02L7.942.5z"></path>
  </svg>
);

export const GithubLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>
);

export const MongoDbLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M15.03 12a3.03 3.03 0 1 0-6.06 0 3.03 3.03 0 0 0 6.06 0zm-1.12.01a1.91 1.91 0 1 1-3.82 0 1.91 1.91 0 0 1 3.82 0z"/>
        <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.33 13.56c-.57.48-1.22.75-1.92.75-1.33 0-2.34-1.07-2.34-3.3v-1a.3.3 0 0 1 .3-.3h.85V9.45a.3.3 0 0 1 .3-.3h.85a.3.3 0 0 1 .3.3V12a1.22 1.22 0 0 0 2.44 0v-2.55a.3.3 0 0 1 .3-.3h.85a.3.3 0 0 1 .3.3v2.55c0 2.22-1.02 3.3-2.35 3.3zM9.91 16.31c-.7 0-1.35-.27-1.92-.75-1.33 0-2.35-1.08-2.35-3.3v-2.3a2.95 2.95 0 0 1 2.95-2.95c.57 0 1.15.21 1.6.64V4.76a.3.3 0 0 1 .3-.3h.85a.3.3 0 0 1 .3.3v8.11c0 1.83-1.01 3.44-2.43 3.44zm-1-3.84a1.22 1.22 0 0 0-1.21-1.21h-.03a1.22 1.22 0 1 0 1.24 1.21z"/>
    </svg>
);

export const PostgreSqlLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M12.44 21.36h-1.6V7.82h1.6zm-3.2 0h-1.6V2.64h1.6zm6.4 0h-1.6V2.64h1.6z"/>
        <path fill="currentColor" d="M12.44 14.56a2.8 2.8 0 0 1-2.8-2.8v-1a2.8 2.8 0 0 1 5.6 0v1a2.8 2.8 0 0 1-2.8 2.8zm0-5a1.2 1.2 0 0 0-1.2 1.2v1a1.2 1.2 0 1 0 2.4 0v-1a1.2 1.2 0 0 0-1.2-1.2z"/>
    </svg>
);

export const NextjsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z" fill="black"/>
    <path fill="url(#next-gradient)" d="M99.5 42.5h-5.26L58.5 73.18V42.5h-5v50h5V62.18L94.24 93H100v-50h-.5z"/>
    <path fill="#fff" d="M83.5 62.18V42.5h-5v50h5V73.18L114.24 42.5h-5.26L83.5 67.82z"/>
    <defs>
      <linearGradient id="next-gradient" x1="102" y1="42" x2="102" y2="93" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff"/>
        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

export const TypeScriptLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path fill="#3178C6" d="M0 0h48v48H0z"/>
    <path fill="#fff" d="M24.7 34.9H12.6V22.2h3.3v9.9h8.8v2.8zm1.1-15.3h-6.7v-2.8h16.5v2.8H29.1v15h-3.3v-15z"/>
  </svg>
);

export const ExpressLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M2.5 16.35V7.65l5.1-2.94v5.88l-5.1 2.94v2.82zm19-8.7l-5.1-2.94v5.88l5.1 2.94v-5.88zM12 2l-5.1 2.94v5.88l5.1-2.94 5.1 2.94V4.94L12 2zm-5.1 14.17l5.1 2.94 5.1-2.94v-5.88l-5.1 2.94-5.1-2.94v5.88z"/>
    </svg>
);
