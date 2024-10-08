export const ErrorHandlerMiddleware = (err, _, res, __) => {
  if (err.isError) {
    res.status(err.status).send({
      name: err.name,
      message: err.message,
    });
    return;
  }
  res.status(500).send({
    name: err.name,
    message: "Server bilan bog'liq xatolik",
  });
};
