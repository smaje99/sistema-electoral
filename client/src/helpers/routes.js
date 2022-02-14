import ObjectCallable from '@Utils/objectCallable';

const routes = {
    home:          '/',
    login:         '/login',
    signup:        ObjectCallable({
        __call__:  () => '/signup',
        personal:  '/signup/personal',
        institute: '/signup/institute'
    }),
    dashboard:     ObjectCallable({
        __call__:      () => '/dashboard',
        candidates:    '/dashboard/candidates',
        info:          '/dashboard/info',
        vote:          '/dashboard/vote',
        elections:     '/dashboard/elections',
        announcement:  '/dashboard/announcement'
    }),
}

export default routes;