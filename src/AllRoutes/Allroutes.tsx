import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/ForFooter/Footer";
import Navbar from "../Components/ForNavbar/Navbar";
import AddClientForm from "../Pages/Dashboard/AddClientForm";
import AddProject from "../Pages/Dashboard/AddProject";
import Clients from "../Pages/Dashboard/Clients";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProjectPage from "../Pages/Dashboard/ProjectPage";
import Projects from "../Pages/Dashboard/Projects";
import Reports from "../Pages/Dashboard/Reports";
import Tasks from "../Pages/Dashboard/Tasks";
import TeamFormPage from "../Pages/Dashboard/TeamFormPage";
import TeamMembers from "../Pages/Dashboard/TeamMembers";
import ForHowItWorks from "../Pages/day1/ForHowItWorks/ForHowItWorks";
import ForLandingPage from "../Pages/day1/ForLandingPage/ForLandingPage";
import ForPricing from "../Pages/day1/ForPricing/ForPricingPage";
import FirebasePhone from "../Pages/day1/ForRegistration/ForAuth/FirebasePhone";
import ResetPassword from "../Pages/day1/ForRegistration/ForResetPassword/ResetPassword";
import LoginPage from "../Pages/day1/ForRegistration/Login";
import Register from "../Pages/day1/ForRegistration/Register";
import ForSupportPage from "../Pages/day1/ForSupport/ForSupportPage";
import UseCase from "../Pages/day1/ForUseCase/UseCasePage";
import Profile from "../Pages/ProfileAndOtherSection/Profile";
import PrivateRoute from "./ForPrivatedRoutes/PrivateRoute";

const Allroutes = () => {
	return (
		<Box>
			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route
					path="/oAuthM"
					element={
						<Box>
							<Navbar />
							<FirebasePhone />
							<Footer />
						</Box>
					}></Route>
				<Route
					path="/"
					element={
						<Box>
							<Navbar />
							<ForLandingPage />
							<Footer />
						</Box>
					}
				/>
				<Route
					path="/how-it-works"
					element={
						<Box>
							<Navbar />
							<ForHowItWorks />
							<Footer />
						</Box>
					}
				/>
				<Route
					path="/use-cases"
					element={
						<Box>
							<Navbar />
							<UseCase />
							<Footer />
						</Box>
					}
				/>
				<Route
					path="support"
					element={
						<>
							<Navbar />
							<ForSupportPage />
							<Footer />
						</>
					}></Route>
				<Route
					path="pricing"
					element={
						<>
							<Navbar />
							<ForPricing />
							<Footer />
						</>
					}
				/>
				<Route path="dashboard" element={<Dashboard />}>
					<Route
						path="tasks"
						element={
							<PrivateRoute>
								<Tasks />
							</PrivateRoute>
						}
					/>
					<Route
						path="projects"
						element={
							<PrivateRoute>
								<Projects />
							</PrivateRoute>
						}
					/>
					<Route
						path="projects/new"
						element={
							<PrivateRoute>
								<AddProject />
							</PrivateRoute>
						}
					/>
					<Route
						path="projects/:_id"
						element={
							<PrivateRoute>
								<ProjectPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="reports"
						element={
							<PrivateRoute>
								<Reports />
							</PrivateRoute>
						}
					/>
					<Route
						path="team-members"
						element={
							<PrivateRoute>
								<TeamMembers />
							</PrivateRoute>
						}
					/>
					<Route
						path="team-members/new"
						element={
							<PrivateRoute>
								<TeamFormPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="clients"
						element={
							<PrivateRoute>
								<Clients />
							</PrivateRoute>
						}
					/>
					<Route
						path="clients/new"
						element={
							<PrivateRoute>
								<AddClientForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="profile"
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route
					path="/resetPassword"
					element={
						<PrivateRoute>
							<ResetPassword />
						</PrivateRoute>
					}></Route>
			</Routes>
		</Box>
	);
};

export default Allroutes;
