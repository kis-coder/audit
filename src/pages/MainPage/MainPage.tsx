

import { useEffect } from 'react'
import { IPost, postApi } from '../../service/PostService'
import './MainPage.scss'
import { useAppDispatch } from '../../hooks/redux'
import { fetchUsers } from '../../redux/reducers/ActionCreators'
import { Post } from '../../components/Post/Post'
import { Footer } from '../../containers/Footer/Footer'
import { Header } from '../../containers/Header/Header'
import { AdminPage } from '../AdminPage/AdminPage'
import { Outlet, useNavigate } from 'react-router-dom'

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
                
                <div className="navButtons" onClick={() => navigate('admin', { replace: false })}>Админка</div>
                <div className="navButtons" onClick={() => navigate('issues', { replace: false })}>Че-то там</div>
                <div className="navButtons" onClick={() => navigate('schema', { replace: false })}>Подтянуть ченить</div>
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

