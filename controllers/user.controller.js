const controller = {
    getUsers:(req, res)=>{
        res.json({
            users:[
                {
                    user: 'User A',
                    password:"Password123"},

                {   
                    user: 'User B',
                    password:"Password123"
                }
            ]
        })
    },

    createUser:()=>{

    },

    deleteUser:()=>{

    }
}

export default controller;