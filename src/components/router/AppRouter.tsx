import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    AdvancedForm,
    Alerts,
    AuthLayoutFallback,
    AutoCompletes,
    Avatars,
    Badges,
    Breadcrumbs,
    Buttons,
    Charts,
    Checkboxes,
    Collapse,
    DataTables,
    DateTimePickers,
    Dropdowns,
    Error404,
    Google,
    Inputs,
    Kanban,
    Leaflet,
    LogoutFallback,
    MedicalDashboard,
    Modals,
    NewsFeed,
    NftDashboard,
    Notifications,
    NotificationsUI,
    Pagination,
    Payments,
    PersonalInfo,
    Pigeons,
    Popconfirms,
    Popovers,
    Progress,
    Radios,
    Rates,
    ReactSimple,
    Results,
    SecuritySettings,
    Selects,
    ServerError,
    Skeletons,
    Spinners,
    Steps,
    Switches,
    Tabs,
    Uploads,
} from './Routes'
// no lazy loading for auth pages to avoid flickering
import LoginPage from '@app/pages/LoginPage'
import SignUpPage from '@app/pages/SignUpPage'
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage'
import SecurityCodePage from '@app/pages/SecurityCodePage'
import NewPasswordPage from '@app/pages/NewPasswordPage'
import LockPage from '@app/pages/LockPage'

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout'
import ProfileLayout from '@app/components/profile/ProfileLayout'
import RequireAuth from '@app/components/router/RequireAuth'

export const NFT_DASHBOARD_PATH = '/'
export const MEDICAL_DASHBOARD_PATH = '/medical-dashboard'

export const AppRouter: React.FC = () => {
    const protectedLayout = (
        <RequireAuth>
            <MainLayout />
        </RequireAuth>
    )

    return (
        <BrowserRouter>
            <Routes>
                <Route path={NFT_DASHBOARD_PATH} element={protectedLayout}>
                    <Route index element={<NftDashboard />} />
                    <Route path={MEDICAL_DASHBOARD_PATH} element={<MedicalDashboard />} />
                    <Route path="apps">
                        <Route path="feed" element={<NewsFeed />} />
                        <Route path="kanban" element={<Kanban />} />
                    </Route>
                    <Route path="forms">
                        <Route path="advanced-forms" element={<AdvancedForm />} />
                    </Route>
                    <Route path="data-tables" element={<DataTables />} />
                    <Route path="charts" element={<Charts />} />
                    <Route path="maps">
                        <Route path="google-maps" element={<Google />} />
                        <Route path="leaflet-maps" element={<Leaflet />} />
                        <Route path="react-simple-maps" element={<ReactSimple />} />
                        <Route path="pigeon-maps" element={<Pigeons />} />
                    </Route>
                    <Route path="server-error" element={<ServerError />} />
                    <Route path="404" element={<Error404 />} />
                    <Route path="profile" element={<ProfileLayout />}>
                        <Route path="personal-info" element={<PersonalInfo />} />
                        <Route path="security-settings" element={<SecuritySettings />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="payments" element={<Payments />} />
                    </Route>
                    <Route path="ui-components">
                        <Route path="button" element={<Buttons />} />
                        <Route path="spinner" element={<Spinners />} />
                        <Route path="input" element={<Inputs />} />
                        <Route path="checkbox" element={<Checkboxes />} />
                        <Route path="radio" element={<Radios />} />
                        <Route path="select" element={<Selects />} />
                        <Route path="switch" element={<Switches />} />
                        <Route path="upload" element={<Uploads />} />
                        <Route path="rate" element={<Rates />} />
                        <Route path="auto-complete" element={<AutoCompletes />} />
                        <Route path="steps" element={<Steps />} />
                        <Route path="date-time-picker" element={<DateTimePickers />} />
                        <Route path="dropdown" element={<Dropdowns />} />
                        <Route path="breadcrumbs" element={<Breadcrumbs />} />
                        <Route path="tabs" element={<Tabs />} />
                        <Route path="avatar" element={<Avatars />} />
                        <Route path="badge" element={<Badges />} />
                        <Route path="collapse" element={<Collapse />} />
                        <Route path="pagination" element={<Pagination />} />
                        <Route path="modal" element={<Modals />} />
                        <Route path="popover" element={<Popovers />} />
                        <Route path="popconfirm" element={<Popconfirms />} />
                        <Route path="progress" element={<Progress />} />
                        <Route path="result" element={<Results />} />
                        <Route path="alert" element={<Alerts />} />
                        <Route path="notification" element={<NotificationsUI />} />
                        <Route path="skeleton" element={<Skeletons />} />
                    </Route>
                </Route>
                <Route path="/auth" element={<AuthLayoutFallback />}>
                    <Route path="login" element={<LoginPage suggestionList="1" />} />
                    <Route path="sign-up" element={<SignUpPage />} />
                    <Route
                        path="lock"
                        element={
                            <RequireAuth>
                                <LockPage />
                            </RequireAuth>
                        }
                    />
                    <Route path="forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="security-code" element={<SecurityCodePage />} />
                    <Route path="new-password" element={<NewPasswordPage />} />
                </Route>
                <Route path="/logout" element={<LogoutFallback />} />
            </Routes>
        </BrowserRouter>
    )
}
