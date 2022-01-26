import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from './config.json'



function Titulo(props) {
    console.log(props);
    const Tag = props.tag;
    return (
    <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
            ${Tag} {    
                color: ${appConfig.theme.colors.neutrals['900']};
                font-size: 24;
                font-weight: 600px;
            }
        `}</style>
    
    </>
    );
}

//Componente React
//function HomePage() {
    // JSX
    //return (

       // <div>
         //  <GlobalStyle/>
            // <Titulo tag="h2">Venha Ootsutsuki!</Titulo>
           // <h2>Discord - Lucas</h2>
            
        //</div>
   // ) 
 // }
  
 // export default HomePage

 export default function PaginaInicial() {
    // const username = '';
    
    //User
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();
    const errorImage = 'https://pbs.twimg.com/media/EwohEf3WQAElyTH.png';

  const [githubData, setGithubData] = React.useState('');



  // trazer dados da api do github 

  fetch(`https://api.github.com/users/${username}`)

            .then((res) => {

                return res.json()

            })

            .then((data) => {

                setGithubData(data)

            })
  
    return (
      <>

        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[100],
            backgroundImage: 'url(http://pa1.narvii.com/7148/614b66f6dc8c446e586ddac54502224759ef8383r1-480-270_00.gif)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              backgroundImage: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUWGBcXGRgXGBUYGBcXFxUXGBcWFxcYHSggGB0lGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABDEAABAwIEAwYDBQcDAgYDAAABAgMRACEEBRIxQVFhBhMicYGRMqGxBxRCwdEjM1JigpLwFeHxcqIkQ3OzwtJTY7L/xAAbAQACAwEBAQAAAAAAAAAAAAAEBQECAwYAB//EADkRAAEDAgMECQMDAgcBAAAAAAEAAhEDIQQSMUFRkfAFEyJhcYGhscEy0eEUUvEjM0JDU2JyorIV/9oADAMBAAIRAxEAPwDpzK+FWkGqSE8qtJo94XNMJ0KmUrlUWJEtrHQ1JwqHFKhpf/TVGi48R7q7zYzuPsuS538RrO4itBnR8RoA/T4oDAfQENdBk3EWgRseJnjVddW3arKodwXQUlCqmVIaaRWRCLC9acKTI3roXY1OjDLcUbqMCeW5Nc+aRJA5mK2ueYwMYZLKTfTf8680IPGgvaKY1JWa7RY7vHTBsKE08mvKob3RbGBjQ0LylSpVVXXrRAI1CRxG1vPhTnykqJSCEyYBMkDgCYE+cVHSry8lTVKivFrivEpm5rNzzOVuvspT0c69pwbsTIsQI43m46W+YptXAgQvSvKetwmJ4CBtzJ9dzTaVSvL2aVeUq8oX0o0b1cAiqGHRV4hQ425cZk/56UO/WFz1OYJhSTQ/PntLC+Zj9T9KvovcVme2eMiED8Ik+Z/2+tTQZmqAefBY4x+Wi7vsPO3tJXP81XJNA3zRPHLkmhTxp0V7CsgBVXarLqdyoVVi5OqaiNNpxptZQiQiHZ9nU+mdhf2p3aDEFThqTs4P2hPJJqhjVStR61UiyyF63gFVpRTopVVEplKpHFzFgIEW49T1qOKheSpi18BvXqzwG/0r1LcCefGs3SbDzP25svKNDXE1Ka9Sn25n6dT0rypawNEBeleUq9pVMLyVKpsOUDVrBNjpggQrgTIMje1vOqnfftNI4JJPnIj5fWoNl6VLSpRSry8vpRi21XEC1Q4dPED/AD86siwk+fpQr3XXPsaYuq2Id7oa/wAPHz4RWJznCOuEkXJk22PlV7tRnOs6Unwp26ms3hs8W2bG3KmGHpOY3NtS+pUbXfDdG6Hedp+3Has/mCCkkKEGhbprXdosU283rjSsctjWOcNFgyEwwoJFwoF1EaeuozVCmjE002nGp8bg3GtAcTpK0JcSDuULHhPqBtWZgGFsFayVwJ1npVBbSikuaTo1adXDVGrTPOLx1HMUY7I5I5jHu5bsI1OLizaOKjzPADiekkaT7TG2mWmMIwnS2wZ6lSwrxKPFR0yT/PQOIxtOlWp0D9TjwG/jYK9Ki5xe4bvZc9pRV3KcpexLndsNqcVuY2SP4lqNkje5NX85yhvDJ0l0OvTB0fukG0gE3cIg+Lwi+x3q9XEU6b203HtEwBt/A23jjZXaxzgSBYXKA01xceewHM1JVfDnWSvhcJ8uJ9T9K1O5QpEp9+NPr2K8ivAAL0pIbJPMxz4ATA5DpTmW9SgmwkgSSABJ4k2A602KUV6BsXhCe+1pUpJIOkkSkggwYkEWI60xJ5UopB3R4rWvcAi3MGx8q9C8VFiHQhJJ9Op5UOy0KUsqPWfXhTXXFPKgCwNug4k/KirDAQkJH/J51gP6jp2BTovYpU+KVbwvL6bsEyogCL8qzOfZ5qBQiyfr+lVncyKwUKNxtyNZzGOEzU0MMAZdquPxFV9XsNs0+v48FBjH540IxBqZ96qbrlHLWhShNOJIsaoYreQLVMtVRzUQmdMRdUlU01aLYrXZP2MGNwAdw5AxDS1tqSTCXRZab/hUAuAdjEGNxhVqtpNzPMDf4otnaMBBOw+RjGY1tpQ/ZiXHf/TREj+olKf6q0H2r4RTuOa7pJUpbaG0pHE616Uj3PtR/wCynJHMOnFuvNqQuUtAKBBAAKlETuDqRcW8NGUMj/UmVn8DK1DzCikf+7XMdJ9KdT0jSaLtAM3t2hE+6Y4akH03TuPpdTdnsiRgMOlhMFxUKeWPxrjYfyjYD8yaxSOzzmZOPq1aGlLH7QifClQACRxOj610LEAr1CbqBE8pG9Uc0eUywG8M2SqNDaALAx8SjsANyTuYHGuU/wDovfiXYkntSMvdBnXcLSjqIDWGmB9VvLb8LI9pszawrf3HApCEJ/erHxLVFwpW5PM+lgIrmOKWorUpVgLJHE8z0n9K2eZ5KplOrEuBKlSQkS44o8SdkjzKqwucYkA29BMn1pv0dXqOq52XcduuusTv38dUViKdFtANB7I17z487FWfxFiDabdfSrLCISBy/wAihmD+PU5w28/9qKtupUYE11OFN5qVJdpEj2sUkqf7WwEqVPKK8Io+FlKJ9nMpGJfS0pxLQVPiWYAgTVPMcMG3FoCgoJJGobGDEjpVdTmmCTE+/sL1AtTivhGkfxK39E/rUFwFueeQoEzMpz76UCVH04nyFDyFvH+FH+e5q23gUgyqVHmr9KtxWZY531abvyrTCiw7CUCAP1PU08U814BWgAAgKJU335f8v9iP0r2oIrypUQNy6E/jLzNWsO6h2BsvaRxPlWca1uK0oEnfkABupRNgBzNTIz1OGBTh4W4bF47Do0k8OpuavWqspCSUgpYV1TstH4R7H5WwyO8xS4HBCfjX06D/AC1Zx7tEJhGHw4b4JUgKPmVG5PWg+JxanFFS1FSjuSZqkcSNek0rqYqo86wnVHAU2Dt9o961jWYYBz97h1tK5srJH9qjA9q9RkWHeSteHxBCGxqWHkEFKb3lNlbbQKzNHswIRg2Vtn9426y4OocDgn39oq9PF1RqVFXCtbGQkSY1sNu2dgt3puX9m38QFKwml9KSAdKkJUJEglCyDe+07Gtz9mmCxeGW8ziGHW0OpCkrKZSlaJ3UmQNQO/8AKOdcs7D9oHMK6VogzZSTspMz6EcD+prsOW9u2HANS1tk8CJE9FJ/MClXSXS1Sm00qlLM1wsR6yJF9fEeaOo4Fzjmpkkjjw1WpL6tJQd7f8fSo3cvAXrNtIKdXOdJIjjcCm4V8Tr3kEiRF+Bg16nHAriQS2E+HlIOknzIn0rjWvoupg1TJmBOxoOro/5SYIJIAG0ontA281ZxACQEJFzvG/kTQ7H4JZTZxTXUBBJ9FA07EY8NJK1q0pJGpR6mBJ4CSL9aoZ5iilorDiUG0LUkqQJ21Rsk7TsJFRWrU6pBAM6NFgANmwz5QJ2fusxjpA9Y5+Vj887HuEqWl8LJue9JB/uv9BXOc1wmhRB0zxKVJUP7kkitNjsc48spxGIISDuBrbB4QlvwnzoZnDOFbEB1bqv5NCU+pIMeVzTLC52WcZ8BbjomNQuaIqGTsgfNljXHLwAT8vrRjCYfQncEnc8PTpQzEOpBN/Tc15gmlukhAhPFR29uJ6V1WBfldLack7Z+4SauLXciqsWNhc9K9DalXNhyG/qanYwgSLX6nc1Lpp01jzd58hp9z7bwgC8D6VSDAGw9ePqaVEA1INjbfp51A4zV8gGigVJVapA1bVVvBYBSlCUmKN5lgUJ0xskC3WvQs34hrXBqzSmYAPOmttz8+sngKOvYMaStZjkKDLXBMEmecW8jv/lqmFNOtnFkzuhzFe153h5n3NKvZQtJK1XaTNmo7jCoShu2tSd1kcNW6kg8TuazKlCqr2YoHGhGLzFS7JpI5xeZciaVJtNoY1Px2LKVeFVVXcaVEHiKI5fkC1+JyUJ/7j6cPX2oi/2bbKfAVJVzmR6iiW4Os5uYDjY88Fk7F0mmJ4KHL8aFJHOrb+JOkJJ8MkgcJIAJ+Q9qzuKwDzF1C38QMg/mPWkrMCRBoZzC0wRBW7XBwkXRbJcMpTpQgFSlEJSBuSTAArt3ZLKmMIe5kOYjT3jy7ENAbJBPw7xO5uTYAVxTIMepCtbaihcEak2UARB0ndJi0i9zWuezT7rgIEqexaitf8SkaihtBPJStSieSutLekRUdTyNi5iIu47tgDRcuvJAi11vRaHPg279w2nv7hvhdRzPOm28L3+6Tq08NRJITHQ6dU8jNcw7P9tnG3HXi3rD38SykkgnSqNJgQSAOR6XJ50v7w7gcvJlBab7zSSJhgLcMjYEBCf61Vpcx+zbDIQFJW4AdgkgcLXVqoDB9G0qjXOeJBMC8WbabRrE7Fs+sKTcg2iT4E2HsfMblhO0n2lPKT3QYQkKB1eMqlJBFwUCDNwQeFBcr7fut+BaQWVAgoUSpMHeBHh47exoP2mwpZfWhxhYX+El1JSRwKQG0lQ6b0FacTMLTfzpi3ozBtbkye+vErEYmoBlBtugfaVp052ELKmz4b2UAQUn8KxsofpNUc2xIUSpCdM3KQZHXT04x6VSdQEBKr6SY9d7c7fWqhdLaoF08PI3EGoOC6t9v5H3Wv6nrGyfBWcGlbxhDeoje4ET51q8ry1xKYc0ADYJuR62HPgfOspl2bdwsrQAQqNSTY2nYjbetPge1DCzCpbP82x9Rt6086P/AE7e1MO3SQPslGMdXNgJG+AT9+CtKwiqjLRok2+lSZQoKSeIIIqFxdNoGxAtqOOqplFSYfDlSgAJJIp7OHK1BI41vcqyprDCVEFUA+RqrnBqpVr9WE/E4dDbCStICo+lY1eJSCVu3vYdedXO2XaEOK0I2FZLEPlW5rJpJsVlhMOYk7VLj8apxUnbgKq6a8ivYq8Jk0BogLyKVexXtSpVJvsuoq8S0hPSSfLkPOjuByppn4U+L+I3V78PSrAmng1pSwtKmZaL7zfnyQFXE1KlnG27n5SivIr2a9mtVjKhxDCVpKVCQbGsRm+VqYVBuk/Crn+h6VvqY/h0OJKFiUnh+Y5GhsThhWbuI0/Pd7InD4k0jvG77LA5XiNKhW3wGDdxbqW0QVlPhBMDS03ISD/0ogdfeslnGTrw65HibJ8Kv/irkfr8ho+zOZlpbTyfwGfNOyh6pKh60gqUy13aFx+PeE6p1A9stNijOEeU1mDL7yVI0jQQpJBCSgIJg3IG9d5wjzT7ICHELBSLpUFCY6Vl81y9T7SENobXrWUEuglOkajrsZ20metc5zPBJafUw8fu60khDzKgWVgKga7ANrkxBjzkXCpOLaY7Nhu2eWsd+zU2kjfENaXCXCTaDbynyK1Wf9hV4qQ6jT41KChFgdIAPin4UJBgKkHYG9cbz3sbi2H1J7hQQVK0HcaJOkknYRzjat1mCcwQlSUYtxaAjUSlUEC9rk3sdqyuLycL0LU+XSoStSlLUG52SVSSpZ4IAk8Aa3NakRJ9uebBZjDVm/VHPBDM1QhDCWytCnSsKhBC9KQlQMqTaSSLA8KCt4YqN7Drv7Vss3yt5vRhm2QhtRRfU2pbillIBcCFeE3ENza03rO4lkocUgmShZSTtdJKTxPEHjV6jqhZJbl3TE88VSlkJs6b3hVRhUzp+fGqrzJSqD9QfeKKsNG7n4RNzz4UOWNSoSCSfMk/rVKbXEydIWri3QayvcHjVtK1IVB48j0I41t8pxfft6wIIMKHI/oawTiCDBBB5G1GuyWLKHikGy0kR1TcH21e9MMLWLHhuwoLFU8zC4ahdQ7NttpBW4BI2oVnubKWohBMUDxuaaJBVqVJ2sAOE9fKgr2ZuH8UeVqLqYmmwwZncNnPdKEodG1ah6wwBsn47vGEWcZO5qGhCczcBgqPrf60dwGMSpGqBIsfOrUMRTqHK2x79qJq0H0W5jBHds9F40yT5U1yOBmCR6gwfnUjmKJqnhm9KYO8knzJJP1oozIAWAk3Kkr2tZguy6VNoUbEpSSJ2JAJFKqdY3eo6xqG0qj1V7qpjkKUZk6a9Bpk0qjqyrSpQadUINOC6rlXpUqkJUClQBSbEHY0Py3KilDzW5a/aoP8TK4So/0qCfc1dCqLdmADimgbhWpsjmFpI0+qtPsKExeHFRhO0e3Onet8PXdTdA27O/8AMx4GdQFqfs27UofZ+5rVpxDQ8A4uIQLFPHUE2I6A8TVzNcOguFwobU4oGStM3IjUUWEwd4nrXIc7U7l2YBxv42HAtPJSDwPRSCQfM12rEYtvF4dvF4cgtuDVHFJ/ElV9wZB6iuUrBzO0wkLrMMadU5XgEG4kc8UDyrKizhyEkqS2k3Meg8gJrHdj8uYcR3ylOJebVI06YvsQCCI39q6Zg30/d3W9lKSY9ayOBywMoDbYKlReBc9YGwrBp3G6Oe0E9odkfhUc7xylL1qUVLAjWY1xy1ATHSsNhMpVjMZ3SISDdSgLJQn4lHr+ZFaHNnoWtKgQpG425++xq7kzQweAU8bPYq45hoSE+91eoo5rNjkqxLwAAyL6R7+XvCyHbJaEq7lkQ234R6c+ZNV+zGGCEOYlYmPA2OazufQVUzxd44k3q+8sKDWHR8CE7jid1r+gHpVnEmw2rMNAEbl4MGhY1ujUVbXIhPoeNz6ihKmC08CgkCCQeIkER9aPvr5bflQXFOSry/z9aIqMDGCFWkS+pBTbmvdEGKnytvUvyr3EJhZoPNeE2DZEqhiEcavZE58Y/wCn86gfTaiHYbA9/iSzqCdSVEE80wY9p9qJwxDazSebFAY4htJxPjwIKuVLhGgpaEnZSgD5fi+Un0otm/ZxbBEqCgTYj9K9Xgw349MQLeahpMehVTx7obISIV2uAynXRJ7HHUfM/WlQxePSCRO1KlyI6gble7unaKInDVKjLipClDhw4kcSPK3v0rqi9o1XM9aChaWwelP+5k7XohhVstai9EqGhAMXUs6Soc9KSpXQweFV0tqTtIrMPBcQDpHqrl9gVAnLXDsk004NYsUkURbxzgq63mw/GKo51QXgFWFRZlxChYyKfg8UptxDg3QpKx5pUFD6UXxqUOmUHxcuJqHHZQtpSkqAlJgxcTAO/rUtcxwh3D391p1hF0Y+23IApKMY0JTAC44JVdCvK8e1YDsN20dy11SY7zDOH9qyTvw7xsn4VgehAg8CO0oxSXMvw/epltTfcLB/llEnzCQfWuGds+zqsK4QPE3PhV0OwP61w5dkquov2EjguyZSLqLarNCJ589d0rteU5jhH5xDJ79gj4QSlba5kBaQQRbUIMgwI6+YjtcwQW2Gh5A6QPOE7+dcC7NYx1rEIUy4W1GRI2IgnSobKFhY0SzDt9jHREto6oRB91Ex6VXq3MPZWhqsqD+pJPn97LQ5s6HsYjDI/e4hxIVF9CSbkk8kyqp+32bJLxQmyGwEJHCEiBHtWa+z9enEO4ldy00shRMnvHPCDPEwVn0rzA5Y9j3lq+FpJKnHD8KE7nzMcKIaC4d5QTntzl5s1ojjc+J0HjZAcY4XFE8K9yzHd0okiQoQeY61fz5bafC0nSkWHMgcVHmaAVMwbK+ouEexGYpKTpn2I9pqvh0nST+hv5GhzQJI5CjOVMFxaUCs6tUm5ROGpAmAj2QZedJVG9Us9wulU1vcNgQ0lII4Ch/a3KPAFAWIpa2tNSU5fSysAC585tUvZnFpYxTThkkEzBEDUkpjrZXT1qN1MWqmwP2g86ZNMEHclGLp52lp0II4hdFd7WSSdIPKeFVMVminGwVWEk+gG/8A/XtQgMCrGObUUhtCSVEBsJAkkm6v/macVm1KbZcVz9GhSBGUaIAdBuQqTc+FO53/ABUqMN9l8UQCGrEAjxN7H+qlSvq3bvRH9dS/eOLfstxgsUh1AWiYuCCLgjcGPQ+tQ4lS0qC0GY4DcR/DzrH5PmrrI06QpJM3k8NwUnkBzq1jM+d1JUhuwkKRMlQMQUiAZF/On4xNM0+3M9w550uucHRtalWLqUZb6nZuO3z2dwRfNkoxTSko0hYIUAbAODgOUgwR/NavcuzLWgE2WPCtJgKSpNjI3H+9ClpcdhWpAn4S2gSRuAJ1KV6WtciqyArDlTqlJlcDUs3McBvNo2BFt7VAxGV+bUaE6SNm3Ytv0jHsyTBmQNYJ1Exodo2EWK0ZeqFy9Vsqzxp7VKCkIGpa5CEgcJKjEk7CPoYI4t1hABWtTc3GsAW9Yj1o9mMouEgoN2Dq0zGVVG1FBC0gKUnxJB2KhcA+sU7LM/ccQHIBJJBHI6iY9ikelOQ8wr4XgfQR8lGrHZDAacelYKVsQp5YEiHGxKYBAnUsp/uPSh8VXot/qzIAMjujXy/KJoYapUOQt7RgAnx0+fERuje5bhXPurmHfADlnQkfhBQnwnr5VzjO8QSpWGduQDoJ/Ek/hNb7Oc57tX3g3sjV6AJUPkfesX26w6VpQ8jbgehuK4J9c1qxqOH1E/cL6XhMIMPRFIaAAjxiHcVyvDqLTydVihYn0N/zqN1EKUnkSPYxUubLJdVO/wDtVnLEpcxTXefCopUvyAlXvB96bMdJA5uubqjIXd0+krbdney6ENFeId7vDqgk7KcIB8LY3VvvUvaLtGgtfd8M2GcOn8I3X1VTMW8XEnE4izY8LaBYGNm2xwSBuRWHzXMS4TG3SrycsA/c/bwWRaKlQvcIg2A+lp3d7htdv0GwUsa/qUTUCRJrw09gXqhWpVkt6U+db37Lcp754W4isM6JFdt+wrBDuVOkbSP1+lD4gSI3phhz1cncPXT5Tu0cB5QGwMe1Xcww4cwQPIUE7TYnxLX1P1ozgMQFYI0rp3JPinFdsMb3R7LjOet6HCBQ0DxJPUfWiXaZcvqoY4dvOm9O7UoralbvG4VtCERJWUhapIgDkAB+dS5M/Db67T3ahPHgd6pY92/9CfmkH86WCVDRH8UD3p71pcQe74XHvoudSLHHU+k6cEYTmBAiTa2/KlVKaVaZlTqQszisvW2pXduNrTJgBy4E2BSqFTHQ1WGOULKRHOJ+YvPyqxmubpJKSH55LC0kf3uLNAXXSozt9feltV4aeyU2oBzmAu/PPkEX/wBeUDCQTwhVgRyIBNulgav5LhPvClYnFkqbSYi4TIEqED4W0iCY3kdayTpPOa6blOIbbQENONq7tvuxpUCSs3W5G9yVHfjXqDjUdDjZVxI6tvYFzttze3MJvaXE4UsqThmmg1AulDJClJ4yBB3PvQjLm0kl5+VOqvCjOn/9hB/8w7BJ23jkOzp0IVLf7OfiCLA8iQnc+pqph8WsxB34xP5T5xfzrU1hmuFRmGy08oPntPnzwsdO4ltR4SfM34yeOkbncm0gUsqzJvCvh1I8JSpBtfSog6j6pBjpWecxzqR4k26gRHIEEDT5Vqcvyo/6e5in0jU8FJYSRsjZT0HmRpT0CjxBrLEVmdWQ7bbjZFYPDvdWYGGSCCL27JmfL8bVpsRjm8SytKTeDasngsyltWHcNr6SeB5UEyXGEJsYUj5jh/nlVfFYiVkix39aRsw2Qluz5XWuxYfTbUbtH8jyKGZq0Q6QdzH6UW7K5R32IUtZ0sMypxfJNwlI5qVsBQRGt1xIEqWpQSBxKiYAHrW9zVAYbGEauEkqdUPxvH4r8Qn4R5GmbGiJOxctXqFz4ZaZPgN/jsHf3AoH2vzsvuAJGhtA0oQNkpH1J3JrLmiWYkJMcaGmrKzQA0AaJtT4NN55VBV9hMJqhWtMS5PAr6D+z9Iw+UpOxXPua+fm0yQK7yw5pwjTQ/CKCxtXI0eaaYaj1pvvHyfhYvtfiYTHM1dyXMv/AAt+X0oJ2tkrCRwqs1jAjDqSSAeEkChKbJpiN6aVjck6LK5k7rdUrmTVV41I6dzvVZSppq0QFz9R4JK2GPV+zaVzQkeoJ/KKkDmkNjqmflQXDOEhCSSROxojjD4kD+YD60Yx5ypU+lDoPeVe75fT2pVX+8dKVbZ+9Y5O4KbtG2H3wibNDTb+PdftAHmk0OeydtIJImOZp6mv4wdRuSZkniZ41VzN5QRpSVKKthckb7R6n0FVrPDiXv1Kth6XVsbTYbDknzN0HISpSlQNKbAcLXJPTf5VC6u/G1xsCPIjbyqw3hVadKUkzw43F7C42G9Rqy5zcigYJGiL0VrBanUq1En8KSd54342jfnRHLMmxABVoCGv/wArq0obChyJgq5EIk8rirfZ7AguIbJA0g6iYtupxfkkavQCpc2xisU8htlJKQQyw2N4JhP9Sjck8+k1u1oDcxN0NUc5z+rb4k7t0d59IK0XY/s4MSrw4iG0aS8U96EpKiB3TZOgKJv+ExO5sDoO3Cw425pACUwlAGwQiyQPQVPgsoOBR92Go2Q4teyVuEQoovOkERsNhuZobnbo0EHY2pPjMW6rVDNjSum6JwTKFI1ZkuHAbtBx2rkKnC25PDY/nVh5U3FLN2fEaHMPlNjt9KPFwgS40nlh0ngtD2Mw+h5x+P3CTo/9VyUt+w1K/po3j0BlguK+I7TxJqz2dywlllsC7hOJX0SU6W5/pBP9dBvtBx37QMp2QL+dbEaDmUqEOqGNp/6gwONz5rIPOFRJNRk16aYagolS4dEnyvV0CwqPAo8C1c4SPzp5qCtKGpPkrOXR3iJ21Jn3Fa9vtY88+lpkBKSdIsCT1vYVkcBhytUDz6AC5J6WrQ9mMvV95bgQsKAGrYHa/vWFWiHQ5wncjaWIyBzWuiIJ3xs71u1dkQpsuOulSiOG1c9z7AqQohNwK6jneXpDRK8QvbgrSP7UwK41mh8SoUoi95NWDC1ADGNrTEnvKpYi6drzTMNhySABJqPAFa1hMzMm55Anf0rX5dlgacKCblok6rEykFICd51abVuxheVV1ZtNsnXcqScAoBtQ4KIPsDNXX8LK2tN9Wk+pbv5XmmDGJW04lE95GsyLJShRRbr4wfXpfx8PPMNuoSZSpTaQjlsLcN1J5eGtZaBa+3nyuhCXOdffHEW9VYXg25PjWeoTY9RSq432cQAAp1zUAAYVaeMW515V4P7PX8rHrKf7+eCWFwjBIK5nlfT1sSR7g0YZy/DqEQCORMjp4Rb/ALaap1CvjbSeoEH3TBPrUGLwCFp0ocU3zMavQGQQPejOqI0AKAfWzG5c31HopnsNhwdMoHCARbzA29qEZsyGwS2hSzBju4XfgSEmflwNUsR2RfJ1IebWRt4ylX/dAHvUf3HFtGXtQaF1K8JED8IULajYC+55TWDi7Qthb0nM/wANUE7jrPH4UQJaa0xDjvxTIIZn4empYv0aHBVbT7G8tbW+8+ogusoAbRy16gpy/QaLbBap3FZjszk68yxvc6tCY7x1aR+7QISlCZ4klCRPC94qPKMwey7GBZTDjKlIcR/EmYcQCeBiQdpCTQb4cC0JnTaQJOpuee4QPVdw7SYfvGwtFykSOqTuPPj7865tnbo0Gdq6EnMkONpeZVqacGoHaJ38jMyDsZmK5z28eb1aEWWbrHATtbmd/nxoB2DNR4czXaOeSmmG6QFJnV1NNh3c+8nbbAY4yTQ77qVKCRxIHuaIPtkVqPsx7O/esXKge6ZGtZ4fyp8zf2NEgbFGIc3IXnRbXLsH92wSsQ4IU4BA5IQISPkPauJ5riS46pZ4kmurfa52jH7hFgBEDgBsK47ua1mUqwzYGbf7LyJrxIvRRnB6UFRFUMOJJJqCtSdVYaNgnlc+Zp/1qslfHn/govlWDIUlStyYAPC4kn3qBLjAWzXimxHX2AyhtlO+6yPxOK8B8wBYf81O4t44n/w6SpeogcIJUACTymKgxWJGty0lA1Af9Khp+Sj7Ua7HYkKxzBAOhaElKlb/ALM6DPC5Hyoqq4ZSObaeqV0qZDg83N5O8m59NO62gUecdmsWRL2JPkgeEHlJua5/mjS21FPeE+ddu7SO6Wieh/KuIZ6uVmgnWRVBxeLqXIMvccK3G5/ZJBtOqVGEgR5E+la5GRqJYeWRqTC3beIlBC0i25jQmelZzsfiFIWop23VxkJSoBJ6ErHsKs5ninCFhSp746lddIISB0gm/GelbsyhsnmOYVKge50Ax+bfco+FYdhxJQNZxC0i5NmFjeANoMwbnw8rM/1opU4EJAZaQlI2/eapSoAC1gu0xN6Fsup1d4beHS2kX0AiOnCRFUsW/YNJBCQdSidyVRc+wrQ1Y05/k3WYoB1nSfHnYLKo9iH1KKtW5J+FPEzyryrvdpN4F69rDI/eiZZuWm+8f5/n+WpycTQZL9SByRTAVygjhwjCcVQTtTjlBKb+Cesa73PQCY9ak70i9/SPzI61qOwOUpxGI1ugFnDgOrkSCoGW0+qhMfyRxqtWrLDJiymlRioIEla7sJgxgcHhmVpAcd7xT50lKtayCjVIB8KSkSbReqf2k9j/AL0PvDAAxKBC07B5I28lgbHiLHYRZzLGFxaln8RJjkNgPYAelW8LnAWkJUqHBYE/jH5n/nnSDDYrPVI4eG7n+eixmAdRpNeNg7Xjv+D4Dy43kXal7AlYAlEnW0uRChaRxQqRBteII2IquZy26SpS4UoyQq1z8hWh+0Rhp7EGRpWEp1KB3O4n0jfpWBxOWlJgKCvcfrTgZ23aNUlOR1iboq4/qUEN+JSiEiCDJJgAczJrueXYFGVZaEEjvCkuOq/iWRtPIWA8q432C7jCunG4oylmzSE3Ut4ixAPBKTMnitNdCzZ9/MgClkhKkjwqVACTcTF59qyr1zlGe3cqMwz69Qspiw1Oz8+S5Bn2YqfdUsncmvMlw2tYrXdoexxw6dSm06eaSox5zegbMMkKAtzrBtZr9ExqUH0wr/aptLbSUjcisng2yUrjeAB5k0Rz/Mi6ZNV8oWAFE8Ck+xt862NzZBtBa2+srS4PDttaYSmUJJKovtAv1uaph4hxsbxE+aj/AL1UXmM6gdja20AiPlUTWMhwHqPlVzUFgF4UzclHWXUBwLI1KWotkcNIPjV/ZNWsNnbiVoQ2iAFeACDDaUhISIAuVQb8+ewJOLV8SRAEpKtoEyq5+GeJ61quzWPbU82pxCW0oaCEmAJGlRDiv5jI48BttUVKhy2VG0xnE3/HPvvU2cvYp9HwhI871zfNm1BXiro2cdqG0AhsKcV/KDpH9W1c6zTEKWZKSL0K6IW9OY0gKXKcWQko4ago9RYXPIbx1o9nuPW/3KYCdCEJQlMxBuFHmVSKzmUhJUoKMeA33ggjYcePzrU419pJaWkFSQiEnkUJ0CeZlPveiGAObJOn8LN5h1hv9lWThEh1QKipDaSVXABOwSNMcb+QNVsIkKC0gAFUqHpw9iT6VNjAUNJQRC3P2i95g3SDPIFPkSambAS+hZskiTF7afEkekprS0i3j5/YepKqCYnm23zPpCEaDSrROZKmTsbm/PrSr36d28KP1VNBkqVTu+IrXO9mv4VIPn4f1qliOzix+Eq/6fF9KKOGeEvZ0th3f4h7e91n/vZrsnZnB9zlDCvxYhYdUeYVPdj+wI9ZrlOJyhSdwR5iK7PmIDeW4RG2lpkezMGl3SDHNouBTvoqqypiGEb0BxDtBcfiYBqbF4mstnmY/hBg79D0/wCRFJKFHMYXTYmvlFvn4BjxQnMMyJUpRMyeJmgysRJk07E4kz+H1Sg/UU3LME4+6hlpJU44oJSkcSfoOJPATTwVXgQD8+652rTpl5OUDw5CO9kMjXjsQ20J7tJ1r5BNpH9UBPr0r6FZwKWW4tPE1Q7D9kmsuY0yFuKguLj4lDYJ/lF48yeNGcQ5ImDHODHvQVZ2cyiaMMECw5ss3n6ErZWFRBBvw964hjWdC1Nnbh5V31WB79KtKQrcH4fa5rkvaPsi6y4ooSqLwk/QE/SqUpF1vXId2ZuNm3gub4o+IjkY9qWHSfSiAywgkEGRuDuD1FS/cTyplkKTdY1QYVrUSDbwkjzBH5TVvDNgHVMEt7cZ4kdbGlhcGrUCAT0F7Gx+U0VYy9wRDDh0z/5a+O/Dqa0p0zuWFbEsbq71CqoIJjxHU3YcCQNSp5Hwm9EsqaS6psKGkQBp4eElMfKpGMBiExpYXIsJSoWJBMz1m/WqklKyNiklEcik6Y+VRiQWtvt7lGFq06rzkIMDYZ1tz4La49vDpZKShKTFjvPSOHzrm+YMgyPyroeQLbdQlsoCl8DJ1G1yqZkeluFVe0XZgCVBRPRIj0kgzQZcAjaVJ7iY4rlUKbVI3FanLM8w5aQ06jQpC9UwClQKpKNRugHa82m8kmo38mChqBJHOR+lDncoiyiY4G3pV2Pymy9Uw5dr6FGXXi6pbiyYV4UieE3InrJ81GpsNhAsIb4jffYmSB1iRQrKFBCtC1+AcD+E9COB5Vt8LlSolCZKh8UiNB4AzeedMaDOuvxSjGYgYWGm27da3oEVazLDoSEaR4QE2Aiwi1KhP+jPch/cj9aVH9WdyS/qKH+oOI+6TeYc5q2zmY/i/urMBv18iQflUqVRxX7z9azbVKKq9H03c/ytY3jgbakGf5qk7YdpElzTqAQ34UjytPyrJFy3xH2H6VksXmTgVofEqTbUNz1PPzpf0nNUNB0vPpCbdAUaWEqVHbSBFvGfdajF52iDBrLY3Fkkk8arOvA3Ch9PrVdbo5zQDGNYLJ7VxEq9l2Wuvq0toKuZuEp8zsK7Z9lXYtvCpOLWdbqgUA7ITP7zQD4uSdR/m2rkHZRzGvvNYTCuKBWqAABCRMqWq2wEknpX0binkYdkNpVKW0hAJ3VAuo8yTJ9atVqU20rTmPAb4+5QFGniK2JuQGC8CZJ2ZpEd8DzJXn+ohalzdKdhwtzHHyoD2vzp5nRoPx6pJvyt86xuI7SrbWotklEwsWg3mU9dxRzt1ix3Da4JAM6htBFr9bUAJtKeQwTCjyDtyhEoe8JnrB69K2jWfh5H7NwKHoSPevn7NsQFFKkkCediTy68K0n2fZ0UOqbXYKFvNPD2J9q0DSBLVhnY92V4B8V0DMjh1OttYllLhXJSopQVCBtqI8rGh+cNYVlBUG7J5tt/lVLtnjTqZW2YI1EHkbRTTmiMWwoRCtNx+Y9aKo4utTENdbj7oHF9EYKu8uqUxPdI9iEk5gmBp2PiEJ4Uw5ietZLLsb+Am42/+tXu8610NLEdY0OC4ur0O2jULDf5HOvejKsxNYLHY/8AaOEIWQXFqkCxlZMjnWk1jnWadeQnwlYBnTvxG4PKgOkXlwaPH4TjojCsoueRaw+UW7M9oUMqWsgpVp0p1wkXkm/omrGK7WOqkKCVJIiyj+teds8nS0jBvJSQnE4TDrn+cMoCx5/Cf6qxOJwXEUsNO8p6zEHLA70UZzbuyoAi/wDNtULmZgo0kjcmZ/KgZTBivKsGqvWlEg8gRJH1rd5FmgLDca4AIv0UR7VzKtBkWawAybfwkcSTMGeporC1BTfc62QGOo9fTAI0M+hW4+/dKVA4PNfuP/tSpl1jtyUfoaXM/dOpwr2lWaOSoX2jZSWtUCRseVKlWdb+2Vel9YWPpUqVJ0xXcPsIwqBhMS+EgOl0Na/xd2GwvQDwGq5jeBOwqf7RcUsAJCiAZtSpUPV+sJjg/wC07xK51iXCbTWwz5w/6Mi/Br8qVKtH6BRQ1d4Ll+afC3/V+VXex7qvvjI1GJNpMfArhXlKr7EN/mjxC1vbF5QLaQSBJMcNxQfLMUv7s+rUZCgJ4xqNppUqmn9J8vda1/7jfP8A8oNhVnXvWiW4eZr2lR2D0d5fKXYoSW+fwml086B9o0yArjMT0g0qVaYg/wBMrGkAHiF07ty0DkeXkiSleHQDySrDJ1J8jXEqVKhK4uFbC/QlSpUqwRKVOpUqgry6KlRivKVKulSDK3cv/9k=)',
              backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '80%', maxWidth: '500px',
              borderRadius: '5px', padding: '20px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 16%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento)  {
                infosDoEvento.preventDefault()
                console.log('Alguém submeteu o form')
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2"  >Bem Vindo! </Titulo>
              <Text variant="body3" styleSheet= {{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
              
            
              
              { <TextField
              value={username}
              onChange={function (event)  {
                console.log('usuario digitou', event.target.value);
                //Onde está o valor
                const valor = event.target.value;
                //Trocar o valor da variável
                setUsername(valor);
              }}
                fullWidth
                
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[500],
                    mainColor: appConfig.theme.colors.neutrals[100],
                    mainColorHighlight: appConfig.theme.colors.primary[200],
                    backgroundColor: appConfig.theme.colors.neutrals[999],
                  },
                }}
              /> }

              
               <Button

type='submit'

label='Entrar'

fullWidth

buttonColors={{

  contrastColor: appConfig.theme.colors.neutrals["000"],

  mainColor: appConfig.theme.colors.neutrals[100],

  mainColorLight: appConfig.theme.colors.primary[100],

  mainColorStrong: appConfig.theme.colors.primary[999],

}}

/>

</Box>

{/* Formulário */}





{/* Photo Area */}

<Box

  styleSheet={{

display: 'flex',

  flexDirection: 'column',

alignItems: 'center',

maxWidth: '180px',

padding: '16px',

backgroundColor: appConfig.theme.colors.neutrals[800],

border: '3px solid',

borderColor: appConfig.theme.colors.neutrals[999],

borderRadius: '10px',

flex: 1,

minHeight: '240px',

}}

>

<Text

variant="iae"

styleSheet={{

  color: appConfig.theme.colors.neutrals[200],

  backgroundColor: appConfig.theme.colors.neutrals[700],

  padding: '3px 10px',

  borderRadius: '1000px'

}}

>

{githubData.name}

</Text>

<br />

<Image

styleSheet={{

  borderRadius: '40%',

  marginBottom: '5px',
  
}}

// se tiver menos que dois caracteres mostra imagem de erro se não +3 mostra imagem do git (se tiver)

src={username.length > 2 ? `https://github.com/${username}.png` : errorImage}

/>

<Text

variant="iae"

styleSheet={{

  color: appConfig.theme.colors.neutrals[700],

  backgroundColor: appConfig.theme.colors.neutrals[900],

  padding: '3px 10px',

  borderRadius: '1000px'

}}

>

  {username}

            </Text>

     <br />

            <Text

            variant="iae"

            styleSheet={{

              color: appConfig.theme.colors.neutrals[100],

              backgroundColor: appConfig.theme.colors.neutrals[700],

              padding: '3px 10px',

              borderRadius: '100px'

        }}

            >

      {githubData.git} Git

            </Text>


</Box>

            {/* Photo Area */}

            </Box>

            </Box>

            </>

            );

            }