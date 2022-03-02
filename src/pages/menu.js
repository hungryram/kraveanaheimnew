import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Seo from "../components/seo"
import BasicLitCombo from "../images/1.jpg"
import Tea from "../images/2.jpg"
import Shakes from "../images/3.jpg"
import Bowls from "../images/4.jpg"

export default function Menu({ data }) {
    return (
        <Layout>
            <Seo 
                title="Krave Nutrition Menu | Krave Nutrition"
                description="View delicious nutritional shake menu at our Anaheim location. We serve healthy meal replacement shakes, protein bowls, protein coffee, and power teas"
            />
            <PageBanner pageTitle="Krave Nutrition Menu"/>
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <div className="uk-flex uk-flex-center">
                        <div className="uk-width-2xlarge">
                            <div className="uk-margin-medium-bottom">
                                <p>You can view our menu through image format with the links below or using the web format below.</p>
                                <ul className="uk-list">
                                    <li data-uk-lightbox><a href={BasicLitCombo} className="accent">Choosing Power or Basic Combo</a></li>
                                    <li data-uk-lightbox><a href={Tea} className="accent">Power Tea Menu</a></li>
                                    <li data-uk-lightbox><a href={Shakes} className="accent">Shake Menu</a></li>
                                    <li data-uk-lightbox><a href={Bowls} className="accent">Protein Coffee/Protein Bowls</a></li>
                                </ul>
                            </div>
                            <div className="step__one">
                                <h3>1. Choose a shake</h3>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Nutritional Shakes</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">170 calories, 17g of protein, 24 essential vitamins and minerals. Keto friendly.</p>
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-decimal">

                                                    {data.markdownRemark.frontmatter.shake_menu.shakes.map((node) => {
                                                        return (
                                                            <li><strong className="uk-text-uppercase">{node.name}</strong></li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Shake Add-ons</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">

                                                {data.markdownRemark.frontmatter.shake_add_ons.map((node) => {
                                                        return (
                                                            <li><strong className="uk-text-uppercase">{node.name}</strong></li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="step__two uk-margin-medium-top">
                                <h3>2. Choose a basic tea or power tea</h3>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Power Teas</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">Includes aloe, tea, liftoff</p>
                                            <div className="uk-column-1-2@s">
                                                <ul className="uk-list uk-list-hyphen">

                                                {data.markdownRemark.frontmatter.power_tea.p_teas.map((node) => {
                                                        return (
                                                        <li>
                                                            <strong className="uk-text-uppercase">{node.name}</strong><br />
                                                            <span>{node.ingredients}</span>
                                                        </li>                                                        
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title" href="#">Basic Teas</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">Iced or Hot</p>
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">

                                                    
                                                {data.markdownRemark.frontmatter.basic_tea.b_tea.map((node) => {
                                                        return (
                                                            <li>
                                                            <strong className="uk-text-uppercase">{node.name}</strong><br />
                                                        </li>                                                
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                {/* <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Tea add-ons</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">Need a little tea boost? View our add-ons. <em>Liftoff is included in a power tea.</em></p>

                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">


                                                {data.markdownRemark.frontmatter.tea_add_ons.map((node) => {
                                                        return (
                                                        <li>
                                                            <strong className="uk-text-uppercase">{node.name}</strong><br />
                                                            <span>{node.ingredients}</span>
                                                        </li>                                                        
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="uk-margin-medium-top">
                            <h3>Protein Coffee and Bowls</h3>

                            <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Protein Coffee</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p>Cold or Hot.</p>
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">

                                                {data.markdownRemark.frontmatter.coffee.map((node) => {
                                                        return (
                                                            <li><strong className="uk-text-uppercase">{node.name}</strong></li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Protein Bowls</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p>350-400 calories, 24g protein, 24 essential vitamins & minerals, meal replacement</p>
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">

                                                {data.markdownRemark.frontmatter.bowls.map((node) => {
                                                        return (
                                                            <li><strong className="uk-text-uppercase">{node.name}</strong></li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const MenuData = graphql`
 {
    markdownRemark {
      frontmatter {
        basic_tea {
          b_tea {
            name
          }
        }
        power_tea {
          p_teas {
            ingredients
            name
          }
        }
        shake_add_ons {
          name
        }
        bowls {
            name
        }
        coffee {
            name
        }
        shake_menu {
          shakes {
            name
          }
        }
        tea_add_ons {
          ingredients
          name
        }
        title
      }
    }
  }
  
`