export default (req, res) => {
  const data = [];

  for (let i = 1; i <= 10; i += 1) {
    data.push(
      {
        id: i,
        title: 'John Doe',
        type: 'Logo',
        author: 'Saheb Giri',
        url: '../ans.jpg',
        height: 400,
        width: 600,
      },
    );
  }

  res.status(200).json(data);
};
