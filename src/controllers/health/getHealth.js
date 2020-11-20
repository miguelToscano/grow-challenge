/*
  Health
  Check if the microservice it's alive
*/
const getHealth = (req, res) => {
  res.status(200).json({ status: 'OK' });
};

module.exports = getHealth;
