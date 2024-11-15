

import { useEffect } from 'react'
import { IPost, postApi } from '../../service/PostService'
import './MainPage.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUsers } from '../../redux/reducers/ActionCreators'
import { Post } from '../../components/Post/Post'
import { Footer } from '../../containers/Footer/Footer'
import { Header } from '../../containers/Header/Header'
import { AdminPage } from '../AdminPage/AdminPage'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavButton } from '../../components/NavButton/NavButton'

export const MainPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const { data: posts, error, isLoading, refetch } = postApi.useFetchAllPostsQuery(10)
    const navigate = useNavigate();

    const [createPost, { }] = postApi.useCreatePostMutation()

    const handdleCreate = async () => {
        const title = prompt('vvedite')
        await createPost({ title, body: title } as IPost)
    }

    return (
        <section className='MainPage'>
            <header className='headMenuBox'>
                <Header />
            </header>
            <aside className='leftMenuBox'>
                <NavButton type='login' text={'Админка'} routeTo={'admin'} />
                <NavButton type='login' text={'Проблемы'} routeTo={'issues'} />
                <NavButton type='login' text={'Схема'} routeTo={'schema'} />
            </aside>
            <section className='contentBox'>
                <Outlet />
            </section>
            <footer className='footerBox'>
                <Footer />
            </footer>
        </section>
    )
}

