function RenderErrorFlat({ errorMessage, children, ...props } = {}) {
  return (
    <span
      {...{
        className: `text-red-500 font-bold text-2xl bg-gray-100 p-5 rounded-lg border-2 border-red-50`,
        ...props,
      }}
    >
      {errorMessage}
      {children}
    </span>
  );
}

function RenderError({ error, children, ...props } = {}) {
  try {
    const errorMessage = error?.message ?? `Empty error message`;
    console.error(errorMessage, { error, props, children });

    return <RenderErrorFlat {...{ errorMessage, children, ...props }} />;
  } catch (error) {
    const errorMessage = error?.message ?? `RenderError error`;
    console.error(errorMessage, { error });
    return <RenderErrorFlat {...{ errorMessage, children, ...props }} />;
  }
}

export default RenderError;
