import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from '../pages/Main';


function MainRouts() {
  return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<Main />}>
				</Route>
			</Routes>
		</BrowserRouter>
    )
}

export {MainRouts}