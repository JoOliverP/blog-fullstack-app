import { Link } from "react-router-dom";
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Menu } from "../components/Menu";

export function Single () {
   return (
      <div className="single">
         <div className="content">
            <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
             <div className="user">
               <img src="https://github.com/JoOliverP.png" alt="" />
                <div className="info">
                  <span>John</span>
                  <p>Posted 2 days ago</p>
                </div>
                <div className="edit">
                  <Link to={`/write?edit=2`}>
                     <img src={Edit} alt="" />
                  </Link>
                  <img src={Delete} alt="" />
                </div>
             </div>
             <h1>Lorem ipsum expedita accusamus officiis doloremque! Cum dicta ea eaque voluptas autem commodi iure, accusamus dolores obcaecati consequuntur in amet ab! Magnam, nihil.</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam alias magni ullam, itaque dignissimos accusantium sequi facere aspernatur quod corrupti nam laboriosam. Vel, eaque molestias. Fugiat quo cumque earum facilis.
             Dolorem totam consequatur laboriosam illum soluta doloremque culpa atque facere ducimus mollitia, cum ratione. Eligendi, laboriosam odio. Quis maiores at autem expedita error, illo voluptas voluptates praesentium temporibus sequi sit!
             Voluptatum ullam libero ad facilis cumque, velit dolores nulla vitae tempore officiis placeat sequi natus. Eaque eos quo doloribus, dolore maxime odit necessitatibus, accusantium suscipit quasi ullam nam delectus quibusdam!
             A veniam possimus atque. Maxime tempore ut minus possimus aut nesciunt asperiores, rem officiis veniam cum cumque voluptas voluptatum placeat error officia iste. Minus, placeat esse veritatis aliquid nemo explicabo?
             Quidem libero, blanditiis nesciunt earum quos possimus, non recusandae molestiae aut repudiandae quo ipsam sapiente quisquam laudantium debitis ea numquam officia, natus excepturi corrupti reiciendis! Sed voluptas doloremque accusamus reiciendis!
             Reprehenderit, similique maiores. Asperiores placeat sapiente a aspernatur maiores, at aperiam provident soluta cumque doloremque. Blanditiis similique eos itaque iure dolore harum consectetur provident temporibus expedita possimus. Cumque, nisi quasi?
             Aliquid sequi temporibus praesentium nesciunt aspernatur totam, a optio animi. Totam est temporibus tempora quisquam non, ipsa dolorem repellendus ullam quasi, iste aliquam quaerat debitis quas dignissimos deleniti id facere!
             Perferendis aspernatur at debitis rem, commodi natus eaque accusantium iste cumque provident soluta nisi eum mollitia officia. Ea sunt nihil amet aspernatur odio ipsam assumenda ratione beatae, veritatis provident similique.
             Voluptatum vero quo a nihil, porro ea officiis suscipit quasi possimus aspernatur dolor labore maiores at iste ut. Laudantium eveniet voluptatem quam in odio asperiores accusantium enim nihil at fuga.
             Dolorum cum ipsa porro adipisci quae labore in provident, quo harum vitae quasi aliquid quod tempora magni ad aliquam ipsam atque totam nobis, repellat reprehenderit vero maiores ratione? Quis, distinctio.
             </p>
         </div>
         <Menu />
      </div>
   )
}