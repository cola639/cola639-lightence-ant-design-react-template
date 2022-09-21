import React from 'react'
import {useTranslation} from 'react-i18next'
import {LoginForm} from '@app/components/auth/LoginForm/LoginForm'
import {PageTitle} from '@app/components/common/PageTitle/PageTitle'

interface SearchProps {
    suggestionList: string
}

const LoginPage: React.FC<SearchProps> = ({suggestionList}) => {
    console.log('props', suggestionList)

    const {t} = useTranslation()

    return (
        <>
            <PageTitle>{t('common.login')}</PageTitle>
            <LoginForm />
        </>
    )
}

export default LoginPage
