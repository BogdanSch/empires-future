import { FC } from "react";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import ScrollTop from "./components/scroll/ScrollTop";
import PreLoader from "./components/loader/PreLoader";

import AOS from "aos";
import "aos/dist/aos.css";

const App: FC = () => {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  return (
    <>
      <Header />
      <main className="main">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        non veritatis, voluptas amet porro maiores iusto ducimus id autem eum
        mollitia laboriosam magni, perspiciatis labore debitis error minima
        quas. Cum hic nisi aperiam doloremque repellendus aliquam numquam unde
        est illum, tenetur nam, dolorum dolor temporibus distinctio? Numquam
        repellat commodi quam neque repudiandae vel, laudantium porro quasi a
        explicabo eveniet omnis optio laboriosam dolores, est inventore
        accusantium dicta, fugiat cum ipsum? Dolore, cupiditate. Debitis, velit
        quia, soluta unde, voluptatibus qui fuga provident excepturi ex animi
        non. Soluta obcaecati quas et aliquid placeat expedita quos amet optio.
        Aliquam est soluta reiciendis quis quasi, rem aliquid eaque perferendis,
        quo libero, sapiente adipisci numquam architecto inventore
        exercitationem dolorem debitis cumque atque a impedit voluptates alias
        non! Ex inventore deleniti, nesciunt mollitia unde laudantium dicta
        explicabo soluta culpa aspernatur facere perspiciatis illum velit rem?
        Recusandae accusamus iste earum quos nam, maxime et pariatur adipisci
        cum qui corrupti sapiente modi temporibus illo ullam reprehenderit?
        Molestiae, excepturi! Eius saepe, cupiditate illo earum eum, in ipsam
        facilis quia eos, ullam deleniti molestiae assumenda. Quod repellendus
        reiciendis itaque quasi libero modi, incidunt explicabo architecto
        voluptate laudantium. Eos, amet ipsum adipisci ex cumque exercitationem
        eligendi necessitatibus laudantium commodi doloremque, alias excepturi
        quibusdam officiis animi nesciunt architecto aut facere saepe esse ab
        sunt iure. Impedit iste ut libero aliquam sint illo doloremque maiores
        ipsa numquam, dolore ab, quisquam possimus dicta blanditiis, fuga autem
        molestiae eius repudiandae quia ullam eveniet et nemo ipsam aliquid.
        Magnam animi laborum ex cumque. Dolores, cum. Consequatur placeat quam
        tempore esse, perspiciatis reprehenderit ad repellat autem quae, ut
        ipsam atque saepe facere iste iure illo fugit at aspernatur consequuntur
        quod possimus blanditiis. Suscipit nemo minus rem. Accusantium quidem
        quo expedita, delectus tempore, rem magnam adipisci eos laboriosam ea
        saepe quaerat voluptatibus officia obcaecati enim voluptatum totam
        aspernatur? Dolorum modi dolor voluptates quibusdam itaque molestias
        voluptate accusamus aliquam quaerat sapiente voluptatum, ad nulla error
        a nostrum necessitatibus impedit cupiditate facere magni nihil
        exercitationem nemo. Nam aperiam eos ex est. Ab laudantium excepturi
        consequuntur repellendus ullam qui aspernatur ex corrupti quaerat dolor
        harum tenetur architecto delectus, quas libero! In, ea quidem at,
        doloremque delectus, fuga ut iusto error quod odit quam! Maxime a
        nostrum sapiente voluptate facilis vero esse consequatur aliquid
        reprehenderit magnam veritatis eaque distinctio fugiat omnis numquam
        quaerat sit tempore, possimus modi? Delectus accusantium temporibus fuga
        explicabo totam accusamus fugiat, voluptatem iure repellat officia illo
        eligendi dignissimos distinctio esse ullam autem earum quidem
        reiciendis. Reprehenderit facilis iure asperiores harum et quo quam in,
        perferendis voluptate nisi libero iusto dolores incidunt expedita.
        Laudantium, quos fuga? Fugiat, molestiae quis? Amet natus commodi
        blanditiis repellat esse omnis ad doloremque illum saepe, totam hic
        optio quod quis corporis ea labore recusandae cumque quam eveniet. Quae,
        minus. Numquam quibusdam fugiat mollitia eaque saepe dolore asperiores
        assumenda debitis quisquam nobis, vero a facere error enim maiores
        cupiditate delectus repellat doloremque dolores perspiciatis magnam
        voluptas officiis. Debitis cupiditate laboriosam expedita magni
        obcaecati, aperiam quae repellat quibusdam odio deleniti, fugiat tempore
        soluta officia doloribus incidunt ab iure! Corrupti maiores vitae iusto
        non! Ea cupiditate atque eligendi libero incidunt, porro cumque
        consequuntur voluptate. Quam animi ipsam aliquid inventore
        exercitationem, tempore modi, veritatis mollitia deserunt a odio. Eaque
        obcaecati, quisquam possimus nesciunt quod maiores ullam distinctio
        praesentium corrupti repudiandae itaque veniam magnam, eos quo harum
        provident. Necessitatibus, inventore. Possimus eveniet in dolorum error,
        provident, sapiente officiis repellendus reiciendis aliquam quia,
        eligendi quod nesciunt atque illo? Eius quis esse asperiores corrupti
        accusantium praesentium enim at nemo, atque fuga est, error sequi
        quisquam quibusdam sunt repellat ullam officiis accusamus eos assumenda
        facilis a! Consectetur culpa ab sit, soluta voluptatibus quis dolorum,
        quidem possimus enim fuga nemo id fugiat quibusdam perferendis
        laudantium quas molestias amet repellat quod labore doloribus est minus.
        Accusamus facere molestias in aliquid ad? Saepe reiciendis itaque error
        placeat cupiditate laboriosam esse doloremque facilis. Totam dolor
        praesentium minima? Fuga quibusdam quas facilis tempora quam
        repellendus, excepturi quo suscipit doloribus sed placeat eos fugiat
        eligendi recusandae accusantium illum iure? Sequi nostrum facilis
        ratione sunt, quaerat natus consequuntur obcaecati tempora quae
        temporibus ab, impedit cupiditate eveniet harum voluptate eligendi dolor
        commodi error nam aspernatur. Aut inventore excepturi in quod,
        recusandae nisi eum quidem neque aliquam ad autem nulla doloribus
        molestiae cum sint fuga mollitia ducimus nesciunt error aspernatur
        deserunt modi. Odit facilis non delectus saepe, eum voluptas esse
        aperiam veniam magni deleniti temporibus recusandae, laudantium quam
        dicta ad, voluptatibus nobis. Reprehenderit vel tempore cupiditate. At
        quia commodi similique quasi voluptatum explicabo natus sit, molestias
        mollitia ullam nostrum repellat rem cum necessitatibus sint excepturi
        nisi reiciendis recusandae ex sapiente optio? Eum provident iste animi
        commodi aspernatur incidunt corrupti modi amet, dolorum ex repellat,
        obcaecati alias optio totam rem quos, quia consequatur veniam fugit.
        Eligendi dolorem nihil tempore et explicabo id itaque eaque non
        molestiae sequi vero culpa quasi ut incidunt veritatis quidem suscipit
        impedit recusandae, ratione asperiores necessitatibus. Vitae, quae
        libero illum deserunt odit hic dolores a, id iste atque ipsum rem
        delectus quidem, reprehenderit maxime nihil! Laudantium fugit atque
        minus totam sequi nostrum amet sunt dolorum ipsa obcaecati eius
        perferendis deserunt, facilis dolores voluptatibus veritatis mollitia
        aliquam ad vel voluptates a, ab quaerat! Consequuntur iste atque
        voluptas tempora placeat inventore, itaque quia vitae facilis explicabo,
        maiores tempore quae deserunt nulla cupiditate ex, nostrum molestias.
        Porro quasi harum tempore perferendis alias ducimus voluptatem omnis
        veritatis. Excepturi, magnam! Nihil earum veritatis excepturi amet eius
        ducimus. Iure repudiandae minima recusandae aperiam consectetur
        voluptate voluptatem, est nesciunt odio tempore nam magnam sed harum
        fugiat illo fugit laborum ipsa rem consequatur tenetur, suscipit modi
        nisi aliquid dignissimos. Neque tempore, sed ipsam modi temporibus
        perspiciatis! Maiores dignissimos eaque quos itaque, sit, veniam neque
        explicabo modi voluptatibus obcaecati sed velit mollitia facere
        voluptates consequuntur nihil autem totam? Doloremque animi eos eligendi
        veritatis quasi, nam iste labore incidunt! Libero itaque ab numquam
        praesentium atque harum quisquam voluptates quam cupiditate possimus
        illum, laudantium, corrupti dolor placeat rerum magnam. Architecto sit
        ad mollitia. Assumenda magnam voluptatum est eius ipsa illum veritatis
        sit vitae sunt animi, facere dolores facilis! Expedita!
      </main>
      <Footer />
      <ScrollTop />
      <PreLoader />
    </>
  );
};

export default App;
