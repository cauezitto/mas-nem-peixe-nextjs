import {string_to_slug} from '../../utils/str2slug'

export default function Product({slug}) {
    return (
        <div>
            {slug}
        </div>
    )
}

export async function getStaticProps({params}) {

    console.log(string_to_slug('Caneca "Mas nem peixe?"'))



    return {
        props: {
            slug: params.slug
        }
    }
  }

export async function getStaticPaths() {

  /*  [
        { 
            params: 
            {
                id:'1'
            } 
        }
        ],
*/


    return {
    paths:[
            {
                params: {
                slug: 'caneca-mas-nem-peixe'
            }
        }
        ]
    ,
    fallback: false,
    };
}
