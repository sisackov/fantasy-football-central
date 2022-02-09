import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import ApiSideBar from '../components/ApiSideBar';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

function ApiDocsPage() {
    return (
        <div className='container-fluid'>
            <Row>
                <Col md={4} lg={3}>
                    <Nav>
                        <Col>
                            {/* style={{ position: 'fixed' }} */}
                            <Nav.Item>
                                <Nav.Link href='#api-get-started'>
                                    Getting Started
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                Endpoints
                                <Nav.Link href='#api-endpoints'>fghjk</Nav.Link>
                                <Nav.Link href='#api-endpoints'>fghjk</Nav.Link>
                                <Nav.Link href='#api-endpoints'>fghjk</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                Notes
                                <Nav.Link href='#api-notes'>General</Nav.Link>
                                <Nav.Link href='#api-fantasy'>Fantasy</Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <div id='api-get-started'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, voluptas nostrum libero
                            praesentium, deserunt quisquam natus veritatis
                            inventore consequatur deleniti vitae earum modi
                            error nisi minima ad corporis necessitatibus
                            aspernatur. Autem esse molestiae necessitatibus
                            quisquam nisi cupiditate ratione quis? At labore
                            quod, iste rem doloribus incidunt ducimus illo nisi
                            quasi. Eos voluptate vitae nam delectus, quis fuga
                            sunt neque molestias. Consectetur mollitia optio
                            pariatur. Corrupti, assumenda necessitatibus porro
                            id atque vitae vel eius sint quisquam ut, minus
                            velit voluptate iusto eligendi officia. Praesentium
                            ab animi tempore voluptatem aut? Eaque, quam? Quod
                            nisi consequatur magnam dignissimos tempore
                            temporibus laboriosam, velit quis cupiditate, quos
                            saepe id, similique suscipit consectetur doloribus
                            voluptates omnis quibusdam harum odit blanditiis
                            voluptas maxime? Numquam deleniti assumenda quas?
                            Harum suscipit dolorum alias. Eos iure omnis
                            cupiditate commodi error deserunt est laboriosam
                            eveniet officiis, sint blanditiis reiciendis rem?
                            Officiis id est sunt obcaecati voluptates deleniti,
                            natus consequuntur? Blanditiis, facere! Ipsa at
                            ratione, nihil temporibus, voluptas rem incidunt in
                            ducimus quaerat inventore rerum adipisci. Est,
                            corporis. Sint, delectus! Iure officiis vero ratione
                            iusto fuga cumque alias ut quidem aspernatur
                            voluptatem? Dignissimos error aliquid facilis cumque
                            est vel ex expedita magni vero ea? Sit vero ipsam
                            fugiat adipisci officiis dignissimos dolores, nobis
                            nostrum temporibus labore deserunt sed eum minima
                            quibusdam sunt? At, error nisi dolores voluptatibus
                            soluta, atque saepe iusto facere quis consequatur
                            rem inventore. Accusantium alias praesentium enim
                            ab, odit eum distinctio nulla, tempora a, sed
                            consectetur eveniet dolore debitis. Labore saepe
                            assumenda, perspiciatis alias sapiente similique
                            quia, eveniet eum consequuntur ut ullam autem vitae
                            qui. Modi et, facere temporibus quidem itaque
                            obcaecati repellendus sed expedita adipisci aperiam.
                            Consequuntur, ad? Soluta earum odio corrupti illo
                            vel deserunt, esse ipsum distinctio natus quos eaque
                            illum ex itaque voluptas amet dolore facere ipsam
                            voluptatem vero optio architecto provident eius
                            reiciendis maiores? Ad. Minima fuga nihil quasi
                            animi tenetur, unde illo architecto alias maiores
                            cupiditate dolorem totam placeat voluptates adipisci
                            molestiae odio voluptatem expedita accusantium
                            mollitia illum fugit modi obcaecati in esse? Quam!
                            Alias exercitationem inventore blanditiis recusandae
                            vero sit magni, illo, officiis tempora laborum
                            consectetur fugiat debitis fugit? Sint architecto
                            omnis tempora illo quasi voluptatem odio incidunt.
                            Voluptatem odit quisquam minima aperiam. Veritatis,
                            accusantium doloribus libero facere molestias
                            exercitationem praesentium tenetur temporibus vitae
                            labore nihil voluptatem maxime nulla quis obcaecati
                            aliquid natus facilis. Enim minima pariatur delectus
                            omnis qui alias aliquid culpa. Quasi, assumenda
                            accusantium, eum, excepturi dicta labore harum
                            necessitatibus sed eligendi eaque a totam enim quo
                            in officia. Architecto expedita nesciunt provident
                            minus explicabo modi quas iste dolore dolorem
                            debitis? Repudiandae aspernatur nisi impedit, optio
                            recusandae placeat vitae dolores dolor accusamus nam
                            nihil consequatur ipsa, unde cupiditate aliquid? At
                            sit saepe, rem consequuntur nobis natus cumque
                            consectetur et adipisci hic? Placeat odio illum
                            accusamus nesciunt eos eius reiciendis nostrum
                            maiores! Ipsa nisi corporis ipsam optio et
                            cupiditate eveniet ducimus eaque fuga est modi
                            suscipit, totam ratione adipisci! Dolorum, quibusdam
                            rem? Voluptates itaque quaerat nihil ipsum facere
                            aut eligendi suscipit laudantium pariatur. Numquam
                            doloribus omnis ex minima dolores aperiam
                            repellendus libero explicabo expedita, vitae
                            mollitia tempora corrupti maiores facilis sequi
                            esse. Odit distinctio, repellendus, mollitia et
                            harum dolorem aliquam a natus laboriosam quaerat,
                            voluptate nihil molestiae animi. Fugiat ullam,
                            veritatis soluta, repellendus totam quia doloribus
                            minima inventore nulla vitae unde molestiae!
                            Repudiandae quibusdam blanditiis expedita voluptate.
                            Blanditiis, tempore error expedita dolor dolorum
                            praesentium nemo eveniet quo obcaecati sint,
                            deserunt minus saepe? Natus, dignissimos. Corporis
                            velit eaque nobis magnam quidem nulla nemo. Quasi
                            quo perspiciatis consequatur mollitia ratione
                            officia vero necessitatibus quidem assumenda
                            exercitationem optio, adipisci cum est. Atque,
                            delectus. At nostrum placeat nemo eligendi delectus
                            sed consequatur sapiente aperiam deserunt excepturi?
                            Nesciunt odio consequuntur neque maxime velit
                            dignissimos quidem dolorum ipsa labore porro est
                            non, excepturi cumque voluptate voluptatibus
                            blanditiis. Dicta ex velit aperiam quisquam tenetur
                            facilis. Excepturi quisquam iure fugiat! Ratione
                            eveniet rem accusantium? Voluptatem est excepturi
                            dolorem expedita, tenetur sed asperiores soluta.
                            Nobis suscipit repellendus, aliquid vel voluptates
                            alias atque sed saepe, natus nulla cumque veniam
                            debitis voluptatem consequatur. Dolorem beatae optio
                            nam vitae, ipsum nulla laudantium laborum fugiat
                            expedita, eum ullam odit accusantium ducimus ipsa
                            consequuntur nesciunt dolores laboriosam blanditiis
                            veniam est quas. Quae, deserunt voluptatem. Sint,
                            quae! Quam mollitia illum eius nemo recusandae
                            aperiam commodi laboriosam dignissimos animi beatae
                            modi ullam dicta, aliquam voluptas harum dolor
                            excepturi ratione alias eveniet veniam. Libero
                            tempore ipsam illo nemo eos. Odio, ut facere.
                            Asperiores cupiditate aliquid distinctio reiciendis
                            reprehenderit expedita, quod harum vero earum
                            nesciunt cumque accusamus illum, dicta inventore,
                            impedit quibusdam. Officia qui excepturi et magnam?
                            Ratione, molestiae atque? Esse illo quos, dolorum
                            odit ad adipisci, deleniti dolore quibusdam sit ipsa
                            culpa et? Nostrum dolores officiis optio inventore
                            mollitia eaque at quas ab rerum maxime? Esse magnam
                            sit doloremque. Dolore, incidunt accusantium sint,
                            et sunt ea alias illum unde minus deserunt nihil
                            itaque illo repellendus. Non maxime laborum,
                            deserunt officia delectus perspiciatis blanditiis
                            possimus reprehenderit illum porro unde nisi! Quae
                            odit rem iusto commodi, odio nulla impedit facere
                            illum suscipit sunt sequi, quis quia sit nam fugit
                            voluptatem incidunt harum. Voluptatibus quasi
                            voluptatem exercitationem asperiores in odit modi
                            sequi! Amet error aspernatur voluptatum, beatae cum
                            eveniet porro sit pariatur laudantium, itaque sequi
                            exercitationem? Impedit temporibus velit assumenda
                            aut, quis quidem dolore modi reprehenderit tempore
                            vel similique eum enim iure? Repellat sapiente
                            assumenda aliquid, exercitationem totam omnis
                            dignissimos asperiores et perferendis illum impedit
                            eligendi magni dolor quis reiciendis esse, ullam
                            eius sunt illo magnam quidem nesciunt aliquam quas
                            sed. Error!
                        </p>
                    </div>
                    <div id='link2'>
                        <h3>fdgdrg</h3>
                    </div>
                    <div id='api-notes'>
                        <p>
                            ducimus quod laborum officiis dicta repellat cumque
                            eveniet ab. Velit ducimus delectus dolorem suscipit
                            provident cumque unde at itaque nihil pariatur natus
                            amet optio, ratione veniam cupiditate nemo magni
                            vero nobis. Facilis, eum! Reprehenderit quam at
                            expedita eius sapiente? Qui placeat animi quaerat
                            non voluptate impedit nam? At error tempora expedita
                            animi asperiores atque porro dignissimos laborum
                            facere quibusdam omnis quas exercitationem,
                            obcaecati nostrum iste dolor eos soluta. Nemo. Nisi,
                            error iste? Eveniet assumenda quibusdam ad
                            repudiandae! Numquam accusamus quos deserunt
                            suscipit consequatur perferendis asperiores itaque,
                            voluptate commodi adipisci sapiente illum ducimus
                            tempora repudiandae debitis quia, obcaecati, ut qui.
                            Dolor, quos porro qui quod enim placeat quam tenetur
                            ad doloremque asperiores at commodi odio molestiae,
                            ullam vero ipsa corrupti non natus perferendis ut
                            saepe dolorem. Consequuntur illum voluptatibus
                            fugit! Vel soluta voluptas eligendi officiis
                            mollitia quas iusto ratione, quidem repudiandae, non
                            numquam suscipit quasi neque dignissimos ab officia
                            necessitatibus perspiciatis repellendus fugit fuga,
                            a blanditiis consequuntur quis. Nisi, neque. Cum
                            facere ullam laborum enim repellat officia quis,
                            laudantium sunt mollitia cupiditate! Iusto quidem
                            aspernatur ratione magnam animi, corrupti
                            reprehenderit quam ducimus quisquam molestias maxime
                            ipsa impedit perspiciatis sequi distinctio. Eius
                            esse exercitationem iure. Ipsa impedit ad possimus
                            fuga rerum eius cum veniam nemo, soluta, eum
                            commodi. Cum obcaecati error architecto repellendus
                            esse, animi voluptatem nam perferendis unde, vitae
                            accusamus. Explicabo nobis iste ipsam culpa dolore
                            voluptas! Harum, ut illum. Officiis ipsum adipisci
                            natus ab corporis ipsam aliquid voluptatibus
                            dolorum, facere culpa ullam unde placeat accusamus
                            hic rem sint! Autem? Beatae excepturi amet enim
                            perspiciatis dolor maxime magni ullam dignissimos
                            itaque? Impedit distinctio asperiores reiciendis
                            modi, nulla eligendi ut totam qui iusto est
                            exercitationem itaque tenetur vitae, tempora dolor
                            perspiciatis? Quasi temporibus officia nesciunt
                            architecto, quo iste quod commodi laboriosam
                            doloremque assumenda. Itaque dolorum hic possimus
                            provident, ex, blanditiis iure illo sunt distinctio
                            facere explicabo perferendis velit. Incidunt, labore
                            nobis! At quasi cumque nesciunt pariatur, voluptate,
                            distinctio expedita officiis libero aliquid fugiat
                            quod eum maxime consequuntur nam? Dolore neque
                            repellat delectus nostrum excepturi, repudiandae
                            quasi quibusdam adipisci, magni itaque at.
                            Perferendis, porro et, iste placeat obcaecati sequi
                            possimus inventore dignissimos facere quae
                            voluptatem repellat a. Dignissimos, rem, officia
                            assumenda soluta, enim unde eum aliquam asperiores
                            ratione fuga hic ipsum voluptatibus. Voluptates quas
                            veniam facilis praesentium explicabo, eum corrupti
                            consequuntur exercitationem cum magni, fuga
                            architecto aliquid culpa numquam saepe quisquam
                            harum fugit! Nobis facilis consectetur praesentium
                            quos minus, iure iusto molestiae. Quas deleniti
                            dicta aperiam recusandae nesciunt quis molestiae
                            corporis officiis tempore! Numquam, perspiciatis
                            iusto ipsa minima facere, adipisci earum molestiae
                            explicabo quasi quidem esse ullam dolorum voluptas
                            illo, maxime illum. Asperiores, tempora in laborum
                            earum distinctio exercitationem facilis amet
                            accusantium voluptate necessitatibus fugiat natus
                            minus, unde doloremque dicta adipisci illum
                            provident modi maxime fuga aspernatur eaque libero
                            autem ullam. Deleniti? Provident nesciunt illum
                            asperiores harum expedita hic iste, natus cumque,
                            sequi maxime neque, nemo dolorem facere vitae
                            aperiam iure. A distinctio officiis placeat eligendi
                            quas fugiat non? Distinctio, iure aliquam?
                            Aspernatur a repudiandae quibusdam, ut consequatur
                            libero tempora temporibus in reprehenderit, ad
                            officia iusto ab harum minus itaque maiores
                            voluptates fugiat deleniti odio veniam numquam vel
                            alias aliquam illum. Dolorum. Voluptas, dolore
                            provident excepturi quae praesentium, labore alias
                            vel placeat nemo animi saepe a dolorem pariatur
                            nostrum repudiandae, sed quos ad similique
                            voluptatum! Ipsum sint, laudantium ipsa laborum
                            suscipit recusandae. Dolore neque a animi mollitia
                            expedita assumenda minima atque ratione fugiat
                            impedit hic quasi ab, facilis doloribus rem minus
                            veritatis, ad odio recusandae repellendus! Impedit
                            aperiam culpa debitis hic veniam. Eveniet sequi
                            earum vero autem pariatur. Adipisci cum impedit
                            autem quaerat officia ipsum architecto dolores
                            laborum amet dicta reiciendis magnam libero nesciunt
                            accusamus optio, sit rerum incidunt repudiandae
                            consectetur ut. Dignissimos aperiam, et magnam,
                            sapiente deleniti atque in neque doloremque natus
                            totam, vero velit dolores? Eligendi aliquid
                            praesentium a quaerat cumque molestias nisi
                            voluptatibus repellendus aliquam, omnis, consequatur
                            ducimus fugit! Corporis doloremque facere nulla
                            eligendi quidem dolorem eum earum porro voluptatem?
                            Placeat et blanditiis tempore velit fuga numquam
                            tenetur, ratione sint atque incidunt nostrum vero
                            amet molestiae. Quibusdam, ipsum nihil. Voluptatibus
                            mollitia porro nihil quasi, natus optio dolores?
                            Modi officia molestias nisi alias accusantium
                            eligendi, reiciendis ipsa beatae, velit, quas
                            deserunt magni obcaecati quisquam debitis impedit
                            assumenda distinctio ipsum in. Ducimus nulla ab
                            possimus saepe pariatur magni quibusdam ut, sapiente
                            tempore, adipisci beatae incidunt. Doloremque
                            accusamus, eligendi rerum voluptatibus numquam
                            nobis, at, cumque distinctio suscipit labore
                            voluptas architecto iure deserunt. Possimus cum
                            excepturi quo blanditiis sed aliquid alias,
                            exercitationem doloribus? Ea illo quaerat, sed vel,
                            eius saepe facere magni repudiandae quos quo
                            cupiditate! Ea facilis odio perspiciatis dolores
                            nulla perferendis. Provident asperiores nihil minus
                            explicabo fugiat rem nesciunt maxime deserunt hic
                            ipsam blanditiis nulla eos unde omnis totam natus,
                            iure est molestias maiores quas. Ullam architecto
                            nam non quam ab? Nemo, eius voluptatem. Soluta saepe
                            eaque, non optio rerum accusantium! Deserunt ab
                            dolores, reprehenderit eius omnis nihil. Quos libero
                            suscipit voluptatum odio, blanditiis animi pariatur
                            dolor maiores quas voluptate? Eum! Molestias,
                            placeat explicabo est, nulla nam quod at tenetur,
                            nisi sapiente veniam iste inventore? Qui expedita
                            quidem officiis fuga eveniet, exercitationem velit
                            sequi explicabo sit error vitae deleniti dolorem
                            quaerat? Autem id adipisci reiciendis. Saepe autem
                            temporibus quas dignissimos vel quam fugit
                            voluptatum et quibusdam esse distinctio magni
                            expedita tenetur eligendi quo perferendis officiis
                            quaerat, hic maxime totam vitae. Fuga. Magni
                            officiis laboriosam ipsa iusto, quam neque pariatur
                            saepe quibusdam commodi quaerat tenetur
                            exercitationem tempore recusandae iure nulla rerum
                            similique? Consequatur, at earum dicta eligendi
                            veniam laudantium optio nisi itaque? Aliquam
                            commodi, veniam nesciunt itaque dicta neque
                            exercitationem corporis adipisci illum ipsa illo
                            ratione unde omnis? Earum labore fugit a modi,
                            eveniet nulla ut amet ex minus saepe temporibus
                            voluptatem. Sequi non ab quasi amet, exercitationem
                            consequuntur quidem, officia, expedita possimus ut
                            eligendi error placeat! Incidunt earum magni
                            voluptates! Delectus laborum assumenda in omnis
                            expedita quibusdam eos autem nulla voluptate! Sunt
                            earum cum ipsam inventore ex perspiciatis dolore
                            pariatur hic quia facilis alias, iusto, illum neque
                            numquam eum illo voluptatem id dolor eos cumque
                            consequatur sapiente soluta odit doloribus? Rerum?
                            Quaerat, ipsum provident. Suscipit natus eligendi,
                            vero explicabo voluptatum nobis nostrum nihil magnam
                            sapiente beatae minima maiores adipisci animi libero
                            velit fugit placeat reprehenderit ducimus iure
                            quidem dolorum qui sit? Velit, enim. Quibusdam autem
                            aliquam, ullam veritatis minus laudantium labore
                            unde sapiente aperiam atque, error, dolorum officiis
                            alias. Blanditiis deleniti commodi quis aspernatur,
                            earum eligendi natus recusandae non perspiciatis
                            modi? Iusto culpa itaque iste inventore totam maxime
                            incidunt dolorum, saepe esse facere doloribus
                            dignissimos, nesciunt dolor accusantium eius, porro
                            possimus earum aperiam! Adipisci tempore voluptate
                            perferendis cumque voluptatem? Veniam, est.
                            Asperiores non veniam excepturi amet nisi quasi
                            facere veritatis sapiente doloremque minima sunt nam
                            quam illo voluptatum quae commodi corporis eaque
                            similique necessitatibus cupiditate, ea illum
                            ratione! At, provident molestias? Doloremque ipsam
                            consequuntur facilis, voluptatum, quos quibusdam,
                            aspernatur repellendus dolorum mollitia voluptate
                            error ad officia quis minus qui dolorem deserunt
                            laborum suscipit tenetur facere cumque voluptatem
                            blanditiis. Illum, saepe voluptates! Voluptatibus
                            aperiam quisquam possimus laudantium accusantium ab
                            voluptatum necessitatibus, tempora atque harum
                            eligendi obcaecati numquam enim quibusdam eius
                            mollitia. Officiis eligendi laboriosam adipisci
                            ipsum. Iure nam maiores obcaecati dolore cumque.
                            Dolor, iusto suscipit. Officiis totam alias
                            temporibus corrupti autem vel beatae error ex! Porro
                            vero consequatur provident sequi debitis, labore
                            facilis corporis sapiente voluptas, et ipsum nihil
                            numquam minus mollitia. Amet odit, possimus sint
                            debitis officia rerum pariatur cupiditate repellat
                            autem. Id tenetur, adipisci necessitatibus corporis
                            ad consequatur expedita nisi. Maxime rem deserunt
                            earum consequatur ipsa consequuntur quaerat ipsum
                            reiciendis. Rem distinctio aliquid ipsa, maiores
                            sint debitis, sequi nesciunt cum quidem blanditiis
                            ullam quaerat? Odit minus nostrum, minima doloremque
                            maiores eum deleniti ducimus qui in illum dolorum
                            nam recusandae fuga! Cum, molestiae libero.
                            Doloribus tempore libero natus in officiis error
                            eius dolorem veritatis minima nobis cupiditate
                            deserunt, dolor commodi dolorum facilis perferendis
                            non est harum dolore voluptate vero dicta quas.
                            Consectetur est tempore, sequi eaque maiores dolore
                            ullam. Recusandae distinctio veniam, ex voluptate
                            beatae magni cum ut consectetur soluta eaque,
                            temporibus dolorem provident blanditiis ab ea
                            corporis incidunt eligendi cupiditate. Velit
                            blanditiis repudiandae molestiae illo fuga dicta
                            aliquid possimus fugit asperiores iusto ratione
                            perferendis saepe sed commodi dolore, maiores
                            temporibus delectus cumque sapiente dolorem, esse
                            ab. Nobis temporibus excepturi blanditiis. Itaque
                            nemo corrupti possimus minima, dignissimos quibusdam
                            nam magni voluptate culpa maiores natus quia
                            consectetur quos id aut repellendus inventore
                            praesentium recusandae voluptatem sunt? Totam iusto
                            molestias voluptate excepturi iure? Nisi odit
                            maiores, beatae nesciunt officia incidunt eum.
                            Quaerat et eos similique voluptates nostrum voluptas
                            iure nobis adipisci tempore. Voluptatibus
                            dignissimos accusamus iste asperiores cumque. Ab
                            doloribus suscipit ullam repellat? Porro qui enim
                            architecto, accusantium ea at nam harum! Deserunt,
                            repellendus tenetur quasi eaque et odio iste?
                            Dignissimos ratione dolorum illo, error molestiae
                            cupiditate at tempore cum eaque velit delectus?
                            Quisquam nihil odio possimus maiores quas cupiditate
                            tempora eius dolorum eligendi at, odit corporis
                            sequi illo delectus, omnis perferendis maxime
                            blanditiis illum ut velit placeat nemo accusamus
                            totam a? Quia. Unde vel eos doloribus autem cum,
                            maxime pariatur nostrum consequatur amet quasi! Ipsa
                            dolores in accusamus quidem repellat sit aut id
                            voluptas eos odio laudantium, suscipit error, harum
                            possimus dolorem? Autem minus enim voluptates
                            dolorum libero saepe blanditiis voluptatum quasi
                            corporis sed molestiae quaerat fuga repellat, hic
                            adipisci fugit ullam alias reiciendis numquam
                            tenetur? Eligendi, iure! Esse voluptate iusto
                            explicabo. Distinctio, enim magni ipsam esse animi
                            consectetur voluptates necessitatibus laudantium cum
                            veniam voluptate recusandae voluptas exercitationem
                            consequatur quas aut perspiciatis a quidem. Dolore
                            repudiandae, placeat quibusdam incidunt itaque eius
                            laboriosam. Tempora delectus, eos, veritatis id
                            voluptas labore aspernatur distinctio culpa ut sint
                            unde? Facere fugit rerum et alias inventore
                            veritatis, sit fuga, eos quae iure nulla, autem
                            consectetur soluta natus. Dolorum ex obcaecati
                            praesentium quibusdam nam, quam dicta expedita
                            soluta deserunt facilis! Illum veniam incidunt eos
                            perspiciatis commodi? Maxime magni culpa, temporibus
                            veritatis dolorum a suscipit exercitationem rem.
                            Excepturi, ipsa! Ea aut dolorum voluptatum sed dolor
                            minima. Libero consequuntur molestiae nam nemo ex
                            neque, vel, provident, tenetur perferendis rem error
                            nulla quibusdam dolor sint accusamus deserunt modi
                            autem dicta atque. Temporibus, nam consequuntur
                            porro veritatis dignissimos adipisci quod qui iure
                            odit cupiditate earum dolores ipsum veniam iusto est
                            quae neque cumque dolorum ullam mollitia eum?
                            Eligendi, quae corporis? Voluptatibus, deserunt?
                            Nostrum voluptas ipsum delectus quam, laudantium
                            modi, fuga assumenda odio numquam sunt laborum culpa
                            magnam dignissimos, aspernatur sint quaerat id atque
                            perspiciatis doloremque omnis! Quisquam sapiente
                            vitae nisi sed odio. Unde voluptates, magni iste
                            consequatur excepturi quibusdam quisquam maiores
                            accusamus cum ratione illum odit rerum eligendi
                            tempore quaerat expedita sint perspiciatis? Ab
                            ducimus dolore maiores expedita distinctio iusto
                            provident perferendis! Qui aliquid animi pariatur
                            ipsa facere, optio eveniet accusamus id sit
                            cupiditate sequi cumque voluptatem nesciunt cum
                            aperiam illo officiis facilis exercitationem omnis
                            nemo rem ut consequuntur. Ad, vitae tenetur.
                            Sapiente id rerum amet laborum sit ratione
                            aspernatur eligendi assumenda unde aperiam, maxime
                            labore facere dolorem doloremque, in doloribus magni
                            dolorum, optio sequi. Quam obcaecati, labore a unde
                            commodi nostrum! Reprehenderit repudiandae quidem
                            dolore quis amet ea omnis velit assumenda veritatis
                            temporibus maiores sit, ipsa eligendi eos
                            exercitationem consectetur! Ratione recusandae
                            nostrum at nemo corporis facere placeat rem veniam
                            voluptate? Dolore ducimus sequi, numquam, totam
                            laudantium architecto dicta itaque, blanditiis
                            excepturi autem quasi? Ab iusto excepturi quis iure
                            adipisci doloremque quae id velit? Velit dicta
                            delectus, hic suscipit accusantium voluptate. Non
                            quis, architecto nulla blanditiis fugit expedita
                            reiciendis? Vero enim, ipsa doloremque aspernatur ut
                            ab magnam hic est debitis harum sequi voluptatibus
                            quidem animi inventore non beatae ad expedita a.
                            Velit repellat impedit iste, exercitationem optio
                            iure rerum mollitia hic unde illum vero facere in
                            praesentium minus magni aliquam atque dolorem.
                            Debitis iusto nesciunt itaque. Laboriosam deleniti
                            incidunt dignissimos rerum. Odit ducimus fugit non
                            ab repudiandae sapiente laboriosam veritatis ex, hic
                            maiores nemo id nobis provident sequi nisi dolor
                            tempora, voluptatibus repellendus in. Molestiae
                            soluta modi reiciendis, cupiditate exercitationem
                            illum. Blanditiis, ullam quia repudiandae explicabo
                            dignissimos sunt voluptatum sequi aspernatur iste,
                            voluptatem veniam labore quas maiores tempora
                            voluptas repellat delectus itaque provident saepe
                            ducimus culpa maxime amet enim esse. Modi?
                            Reprehenderit facere esse perspiciatis nostrum
                            expedita. Excepturi veniam voluptate odit. Molestiae
                            fugit, repellat aspernatur libero id, dignissimos
                            saepe doloribus sit animi expedita quaerat,
                            blanditiis quidem eligendi eum ex maiores quod.
                            Eaque dicta, ullam non exercitationem atque expedita
                            nihil doloremque earum iusto distinctio! Fugiat
                            tempora temporibus officiis labore nulla libero
                            magni repellendus quos voluptate impedit! Rem
                            laborum nemo animi nesciunt necessitatibus. Dolores
                            eos dignissimos ea itaque modi sed, voluptatibus
                            ipsum autem, quod asperiores, expedita amet quia
                            illum accusantium omnis sit? Ex ad mollitia, fuga
                            numquam nam temporibus voluptas libero
                            necessitatibus esse!
                        </p>
                        <h3 id='api-fantasy'>Fantasy Score Details</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quibusdam.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ApiDocsPage;
