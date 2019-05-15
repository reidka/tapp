import Positions from "./modules/positions/components/index"
import Applicants from "./modules/applicants_by_course/components/index"
import RootRedirect from "./modules/auth/components/RootRedirect"
import Screen from "./modules/cp/components/index"
import NewPosition from "./modules/positions/components/NewPosition"
import AllAssigned from "./modules/all_applicants/components/AllAssigned"
import AllUnassigned from "./modules/all_applicants/components/AllUnassigned"
import Summary from "./modules/tapp_summary/components/Summary"
import ApplicationForm from "./modules/application/components/ApplicationForm"
import PositionsApplied from "./modules/applicants_positions/components/PositionsApplied"
import MockAuthenticate from "./modules/auth/components/MockAuthenticate"
import ApplicantView from "./modules/applicant_view/components/ApplicantView"
import AdminView from "./modules/admin_view/components/AdminView"

export const openRoutes = [
    {
        path: "/",
        component: RootRedirect
    },
    {
        path: "/authenticate",
        component: MockAuthenticate
    }
]

export const privateRoutes = [
    {
        path: "/admin",
        component: AdminView
    },
    {
        path: "/admin/positions",
        component: Positions
    },
    {
        path: "/admin/positions/new",
        component: NewPosition
    },
    {
        path: "/admin/applicants",
        component: Applicants
    },
    {
        path: "/admin/assigned",
        component: AllAssigned
    },
    {
        path: "/admin/unassigned",
        component: AllUnassigned
    },
    {
        path: "/admin/summary",
        component: Summary
    },
    {
        path: "/cp",
        component: Screen
    },
    {
        path: "/application",
        component: ApplicationForm
    },
    {
        path: "/application/positionApplied",
        component: PositionsApplied
    },
    {
        path: "/applicant",
        component: ApplicantView
    }
]
