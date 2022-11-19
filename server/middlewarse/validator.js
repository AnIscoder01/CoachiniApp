const {body,validationResult}=require("express-validator")

//register validator 
const registerRules=[
    body('name','Name required').notEmpty(),
    body('mail','mail required').isEmail(),
    body('password','password required').isLength({min:8}),
    body('phone','phone required').notEmpty(),
    body('age','age required').notEmpty(),
    body('height','height required').notEmpty(),
    body('weight','weight required').notEmpty(),
    body('role','role required').notEmpty(),
]


//login rules
const loginRules=[
    body('mail','mail required').isEmail(),
    body('password','password required').notEmpty()
]

const validator=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

module.exports={registerRules,validator,loginRules}