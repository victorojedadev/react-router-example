export const Landing = () => <h2>Landing (Public)</h2>
export const Home = () => {
  return <h2>Home (Private)</h2>
}
export const Dashboard = () => <h2>DashBoard (Private)</h2>
export const Analytics = () => <h2>Analytics (Private, permission: 'analize')</h2>
export const Admin = () => <h2>Admin (Private, permission: 'admin')</h2>