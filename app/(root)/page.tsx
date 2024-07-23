import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'

const DashBoard = () => {
  const loggedIn = { firstName: 'Saad', lastName: 'Kashif' };

  return (
    <section className='Home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions'
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}]}
      />
    </section>
  )
}

export default DashBoard