export default function Stark() {
    return (
      <div className="mt-10">
        <div className="max-w-xl mx-auto bg-black text-white font-serif p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-100">House Stark of Winterfell</h1>
  
          <img src={"stark-house.webp"} />
  
          <div className="bg-black text-gray-300 text-center py-1 font-semibold text-3xl mb-4 rounded">
            "Winter is Coming"
          </div>
  
          <div className="text-sm space-y-6">
            <div>
              <strong className="text-xl text-gray-300">Coat of arms</strong><br />
              <div className="text-gray-400 text-lg mt-3">
                A grey direwolf on a white field
              </div>
            </div>
  
            <div>
              <strong className="text-xl text-gray-300">Seats</strong><br />
              <div className="text-lg mt-3">
                <span className="text-gray-400">Winterfell</span><br />
                <span className="text-gray-400">White Harbor</span> (temporary)
              </div>
            </div>
  
            <div>
              <strong className="text-xl text-gray-300">Heads</strong><br />
              <div className="text-lg mt-3">
                King <span className="text-gray-400">Bran the Broken</span><br />
                Lord <span className="text-gray-400">Jon Snow</span> <span className="italic">(disputed)</span>
              </div>
            </div>
  
            <div>
              <strong className="text-xl text-gray-300">Regions</strong><br />
              <div className="text-lg mt-3">
                <span className="text-gray-400">The North</span>
              </div>
            </div>
  
            <div>
              <strong className="text-xl text-gray-300">Titles</strong><br />
              <div className="text-lg mt-3">
                <span className="text-gray-400">Warden of the North</span><br />
                <span className="text-gray-400">King in the North</span><br />
                <span className="text-gray-400">Lord of Winterfell</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  