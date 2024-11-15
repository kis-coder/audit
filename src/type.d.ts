export type InputProps = {
    type: 'text' | 'password',
    placeholder: string,
    changeFunction: Function
}

export type Routes = 'main' | '/' | null | 'admin' | 'schema' | 'issues'

export interface PagesNames {
    name: Routes,
    isPageLoading: boolean
}


export interface ButtonProps {
    type: 'login' | 'signin' | 'increment' | 'navigate',
    text: string,
    routeTo?: Routes
}