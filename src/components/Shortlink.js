import React,{useState,useEffect} from 'react'
import '../assets/main.css'
import Result from './Result';

function Shortlink() {
  const [link, setLink] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('links');
    if (items) {
      setData(JSON.parse(items));
      console.log(setData)
    }
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!link) {
      setError('Please add a link');
      document.querySelector('.link__input').classList.add('link__input-error');
      return;
    }
    try {
      setError('');
      setLoading(true);
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const { ok, result } = await response.json();
      if (!ok) {
        setError('Error shortening link. Please try again later.');
        return;
      }

      const shortlinks = [
        ...data,
        {
          hashid: result.code,
          short_link: result.full_short_link,
          url: result.original_link,
        },
      ];
      localStorage.setItem('links', JSON.stringify(shortlinks));
      setData(shortlinks);
      setLoading(false);
    } catch (error) {
      setError('Error shortening link. Try again later');
      setLoading(false);
    }
  };



  return (
    <div>
      <div className="url-shorten">
        <div className="grid-container">

          <div className="bg-top"></div>

            <div className="shortener">

              <form id="shortenURL" className="link" onSubmit={handleSubmit} >
                <input id="url" className="link__input" onChange={(event) => setLink(event.target.value)}
                  type="text" placeholder="Shorten a link here..." />
                <div id="error-msg"><p className="error">{error}</p></div>

                <button
                  type="submit"
                  className="btn-shorten submit-btn"
                >
                 {loading ? 'Loading' : 'Shorten It'} 
                </button>
              </form>

            </div>
          <div className="bg-bottom"></div>
        </div>
      </div>

      <div class="short-links">
        {data && data.map((item,index)=>(
          <Result 
          key={index}
          shortlink={item.short_link}
          url={item.url}
          />
        ))}
      </div>
    </div>
  )
}

export default Shortlink
