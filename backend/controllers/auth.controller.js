export const login = async (req, res) => {
    console.log('this is login user ')
    res.send('login')
}
export const signup = async (req, res) => {
    try{
        const {name,email,mobile,password} = req.body

    }catch(error){
        console.log(error)
    }
}
export const logout = async (req, res) => {
    console.log('this is logout user ')
    res.send('logout')
}