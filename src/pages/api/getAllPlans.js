import plans from "../../data/plans.json"
export default function handler(req, res) {
    res.status(200).json( plans )
  }
  