const Dashboards = () => {
    return (
      <section id="dashboards" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe title="capstone_project" width="100%" height="400" src="https://app.powerbi.com/reportEmbed?reportId=28cfe113-229a-461c-a719-cc7ce42fd44d&autoAuth=true&ctid=41f88ecb-ca63-404d-97dd-ab0a169fd138" frameBorder="0" allowFullScreen={true} className="rounded-lg"></iframe>            {/* Add more iframes or other content as needed */}
          </div>
        </div>
      </section>
    )
  }
  
  export default Dashboards