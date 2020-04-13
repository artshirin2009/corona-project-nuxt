<template>
    <section>
        <h1>UserId {{$route.params.id}}</h1>
        <ul>
            <li>Name - {{user.name}}</li>
            <li>Username - {{user.username}}</li>
            <li>Email - {{user.email}}</li>
            <li>Address - {{user.address}}</li>
            <li>Phone - {{user.phone}}</li>
            <li>Website - {{user.website}}</li>
            <li>Company - {{user.company}}</li>
        </ul>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    asyncData({params}){
        
        return axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
       .then((res) => {
           console.log(res.data)
         return { user: res.data }
      })
    },
    validate({params}) {
    return /^\d+$/.test(params.id)
  },

}
</script>