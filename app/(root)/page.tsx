import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'

const DashBoard = () => {
  const loggedIn = { firstName: 'Saad' };

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
      </div>
    </section>
  )
}

export default DashBoard