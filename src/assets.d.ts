type LocalImageMetadata = {
  src: string;
  width: number;
  height: number;
  format: string;
};

declare module '*.webp' {
  const metadata: LocalImageMetadata;
  export default metadata;
}

declare module '*.png' {
  const metadata: LocalImageMetadata;
  export default metadata;
}

declare module '*.jpg' {
  const metadata: LocalImageMetadata;
  export default metadata;
}

declare module '*.jpeg' {
  const metadata: LocalImageMetadata;
  export default metadata;
}

declare module '*.gif' {
  const metadata: LocalImageMetadata;
  export default metadata;
}

declare module '*.avif' {
  const metadata: LocalImageMetadata;
  export default metadata;
}

declare module '*.tiff' {
  const metadata: LocalImageMetadata;
  export default metadata;
}
