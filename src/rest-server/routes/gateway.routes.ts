import { Router } from "express"; 

const router = Router();
const gateWayRouter= Router();

gateWayRouter.use('/:apiName', (req, res, next)=>{
  res.status(200)
  res.send({
    apiName: req.params.apiName,
    state: 'OK'
  })
})

router.use('/gate', gateWayRouter)


export default router ;
