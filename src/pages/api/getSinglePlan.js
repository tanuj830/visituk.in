import data from "../../data/plans.json"
export default function handler(req, res) {
    let slug="char-dham-single";
    let plan=data.plans.filter((plan)=>{
        return plan.slug===slug
    })
    res.status(200).json( plan[0] )
  }
  