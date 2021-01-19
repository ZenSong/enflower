import vue from 'vue'
import router from 'vue-router'  
vue.use(router)      
const originalPush = router.prototype.push
router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new router ({
    mode : 'history',
    routes : [
        {
            path : '/',
            name: 'home',
            component : () => import('@/pages/home/home')
        },
        {
            path : '/plant/:type/:title/:format/:id', 
            name: 'plant',
            component :  () => import('@/pages/type/type')
        },
        {
            path : '/mine',
            name: 'mine',
            component : () => import('@/pages/mine/mine')  
        },
        {
            path : '/login',
            name: 'login',
            component : () => import('@/pages/login/login')    
        },
        {
            path : '/work',
            name: 'work',
            component : () => import('@/pages/work/work')   
        },
        {
            path : '/aboutus',
            name: 'aboutus',
            component : () => import('@/pages/aboutus/aboutus')   
        },
        {
            path : '/feedback',
            name: 'feedback',
            component : () => import('@/pages/feedback/feedback')   
        },
        {
            path : '/contactus',
            name: 'contactus',
            component : () => import('@/pages/contactus/contactus')  
        },
        {
            path : '/security',
            name: 'security',
            component : () => import('@/pages/security/security')   
        },
        {
            path : '/collection',
            name: 'collection',
            component : () => import('@/pages/collection/collection')  
        },
        {
            path : '/message',
            name: 'message',
            component : () => import('@/pages/message/message')  
        },
        {
            path : '/publish',
            name: 'publish',
            component : () => import('@/pages/publish/publish') 
        },
        {
            path : '/category/:type/:format/:id',
            name: 'category',
            component : () => import('@/pages/category/category')  
        }, 
    ]
})