export const debugMessage = (msg: string): void => {
  const style =
    "color: #fff; font-weight: bold; background-color: #1a5e87; padding: 3px 6px; border-radius: 3px;";
  console.log("%cDEBUG", style, msg);
};
