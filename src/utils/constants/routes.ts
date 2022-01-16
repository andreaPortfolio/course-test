export const ROUTES: Record<string, string> = { 
    login: "/login", 
    home: "/" ,
    overview: "/overview" ,
    tickets:"/tickets" ,
    ideas:"/ideas" ,
    contacts:"/contacts" ,
    users: "/users" ,
    articles: "/articles" ,
    settings: "/settings" ,
    subscriptions: "/subscriptions" ,

};



export const SIDEBAR_LINKS: Record<string, string>= {
    overview: ROUTES.overview,
    tickets:ROUTES.tickets,
    ideas:ROUTES.ideas,
    contacts:ROUTES.contacts,
    users: ROUTES.users,
    articles: ROUTES.articles,
    settings: ROUTES.settings,
    subscriptions: ROUTES.subscriptions,

}