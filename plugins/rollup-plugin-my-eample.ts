export default function myExample() {
  return {
    name: "my-example",
    resolveId(source: any) {
      if (source === "virtual-module") {
        return source;
      }
      return null;
    },
    load(id: any) {
      if (id === "virtual-module") {
        return 'export default "This is Virtual!"';
      }
      return null;
    },
  };
}
