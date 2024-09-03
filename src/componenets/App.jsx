import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import css from './App.module.css';
import 'modern-normalize';

const App = () => {
	return (
		<div className={css.webstyle}>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</div>
	);
};

export default App;
