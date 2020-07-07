
export const AddEmployeeAPICall = (operatorToken, user) => {
    console.log(user)
    return fetch("https://adminapp.mobbypark.com/api/operator/auth/operator/employee/add", {
        method:"POST",
        headers: {
            "x-auth-token":operatorToken
        },
        body:user
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


export const GetAllEmployees = (operatorToken) => {
    console.log(true)
    return fetch('https://adminapp.mobbypark.com/api/operator/auth/operator/employee/get/employees', {
        method:"GET",
        headers: {
            "x-auth-token":operatorToken
        },
    })
    .then(response => {
        console.log(response)
        return response.json()
    })
    .catch(err => console.log(err))
}