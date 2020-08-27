export default (req, res) => {
  const {
    query: { iid },
  } = req;

  res.end(`Post: ${iid}`);
};
