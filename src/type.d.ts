export type InputProps = {
    type: 'text' | 'password',
    placeholder: string,
    changeFunction: Function
}

export type ButtonProps = {
    type: 'login' | 'signin' | 'increment' | 'navigate',
    text: string,
    routeTo?: 'main' | '/' | null
}