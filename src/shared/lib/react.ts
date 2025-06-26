export function attachSubComponents<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends React.ComponentType<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  O extends Record<string, React.ComponentType<any>>
>(displayName: string, topLevelComponent: C, otherComponents: O): C & O {
  topLevelComponent.displayName = displayName;
  Object.values(otherComponents).forEach(
    (component) => (component.displayName = `${displayName}.${component.name}`)
  );

  return Object.assign(topLevelComponent, otherComponents);
}
