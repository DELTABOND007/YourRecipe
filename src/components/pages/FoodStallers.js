import React from 'react'
import '../../App.css';
import "./FoodStallers.css";
import Footer from "../Footer";
import { Carousel } from 'react-bootstrap';

// import image1 from './../assets/images/1.jpg';
export default function FoodStallers(){
    return (
      <>

     <div className="food-stall">
     <Carousel fade={false} pause={false} controls={true}>
      <Carousel.Item>
         <img
          className="d-block"
          src="https://lh3.googleusercontent.com/zcNmaBp4eVyTMIClcnaG8hBfODKQ0_Su8EYKF3jWkJgyzfefgepWkQTXi8iUbv-HBVkdIOJzQHD53pT7S0_BaUvECR8aRwHrUcNdoJ985donMeU8MFkY4cRugMeKLK5hoTp3IyJEmmHmOABsDjv2PB0uESa9rb5awefuFfdIpsJgOeneWbOSaKWN_JXhCLVbXi5Hmbb-KvE8HQ6VrtFK0xRuG_ja_U-ejAw6y243_QET1xbMkZeieIY4Xg3KxMaqdTkECHbbmj2tx4jSoSLCA1NHvFF-kuL_b6lY5zb0CuZmsBvTb2iCxgF88NnKy5aWEDj0KQQTaNgze_2_BeihIezGN2vmNr0INIvBEDSrV5SGCg2NjnWdOWcNFgJIZEwk0Hyxh5S40-IGnnb_v-Mg9V08LVey-308iVx0hPesZoCBb9VlCjLYLaYpNxt7A4RRnFGz-KKF3RF3kFP02aqfpODsJBwYTnW2Crn4I4mTrXFO2l0shdLOdC4_30s_m_fRP_jwi0OCc_TY4EZ6S-5A0QGlF6jtBllyCaOShMGX-4ZJd1GJxHMpA6l2gSAdvDx1kmKij2h9AglGqDHMn3deAGzp-sykeW_L4mvNPxiA5TwbdNz_UwTnqpDCnhjLak-oYU3BAb2HsL15juGuYXPVI7ijUmoq3i-P-WhL1cyzXp3xmF6mVwGbUzWPgx2FC0YEMxqddYRrOAQbo_xk1f2B6v4=w986-h760-no?authuser=0"
          alt="First slide"
        /> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/bo6hkgolgfzOB8KIaHMLOGZXVoD3mPsEfrNw0blFrC4WGO6EXoRpOJ-Ntn3CL2xUcvobAm_QxV6cLwPQ5TTwopcNUG6DfFjEBNmgwVH0BY35O5MR8iegFhMtlFYcke5Z04XnOnfEcGQD_XdFnDot1orVEoFGrAcZJJn20MlSmNr6_-v99yQZXVPqRmmuUdofxjFYpnhvt_-viMA-E5oWLP3R9SNKaN5aGtRIRlfrH8yO7N30rEVoG37x5qeqh83uQXA2R0HcDr0M55I1vFlicY3YhykUpBRc5E0F4XTK6LS8cTUo-NJTKOLsDUa-JcAcRSA1VmISsuhNc1wq7qFuIzdZyRw4nvY1HXGyqJMhA7gTGUENJ4VWFJhZhI5R6fPTOJ9VO5x829NPPZ129x-6gPMCHNEaaqql-xHUQrfQmZrhI6tNjTG7vJmJzI89Dd-Bx2u6sbMecnoiDkC7kDBinu4DV1-zdW_SbRGfE-TuJ2NOwhBYmCpkB6MbePV5Snpw7eddzxRW-HAOc0EX8GV-sSw2kVGUz9NdDLbOAY13THItT9b2IX0av_Qe_P1iw1_iWvxI0mVo2s2Y0b6azd8_ZqUuyNjyWcgVCiSYhG9JfmrLHiNnopqGSzLztMnqYv0uIcTj9VMsmnjPRv4_kVMdTHml3U7-TAqFQqMBVdkcL1sTl9G4nIhgZT1qcwEL7dHavpKxNnUrZseuVdNipjAIQhA=w888-h623-no?authuser=0"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/okvPz9zvco7A9jCqdJoA5a4cLzXD62zf9rOdSQxlUyOzXTXuVyed92aVGKX9C0sXiWKVPvFy_AFHq1zfNrbudI_qq8RmrrOFM5OkHK487snDiI9kPOaPFoG2JXfATpJ1G04gr4YEvKO7DujgJamrxTPYRa1qjg5gQ0I3Zz5-qxXvZP_H8wEK7tcbhGSNH_O1Umo8CclZjCR6miCIIzyU2U-zyBQiNFTRiiSwbN9KaauzaaykziVLhxtSnW92gCkwYZR86WTo0FEs1Lf3HTP69sYJEJ4u0kVkk1NbeUqTYpBgdTAWsfgd2n-_TcTt6vS18Q8RbeHv1GAdufqBRllDoV3Z5p5Om181UFVQKyXPSFV_8emg9tKwum14YDnMKagxL-yZJge8tf8E8kBwsIzhsETpjYOmHlVia4uN3nf4qvbFUZ7IeX27E2MXfEugO5gvJiM6AblkQoVqb03j1DvTb_cOb7ijm4Y9KPrU68XyG6lVtLEl82KQAB5urjIlQCfFS1n0Ucw1BofLtEyp6nwBSsGPEr05WMEv2bFozU9VpeQeZpR3iOeCyDf7_wYZlEj3JPWoZ72JB5PiFOTlsfWCAh-482rE0Jr_PL9QTGap-1sEkpwtwUMIWeNUmuTXi9BCSUKtoayXQPSzKjRT5P1eHz3GcKwxe-TDly9gmSUxH7fgDQdlUzfjcZ7kdAQ0XdJbdosYY8kiW_jzWTJOucZcyNg=w677-h770-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/rDYP3ZQ_DzTpNgLwHx-I9WP2ErsYCT0yitKi9LPSooOM3J8yArK_t-6One5l82DxE_JwL5nSpKVgJX4fc8NM5wT5OlMksM7_lUadT3HWVst_HDmqlFE4oNYnbWq3on1V6aRv8e3l44l8i5BwQOToDjy_kYDBnRVTCPE_0OwL-6RunSjBsT8Wew6B8dw2zmtoB_6oeKXYWJ0ULRAloXBK0668D7vZh19UtNd6qfzOeGSDqfAzdc_NwNZl0GU_7u3kZ8RoFG0q1Tpq1_yymdrWCHUUW6Be5XeSKsV2RlfwApP9nY46m7TqEguZ-f5v1-BlOXb-7DCLiLywextsAtKHPdGz6tdx-PlsASF47SBw_mdwKFm5z69jg5Ry43FyMZwEoZYQ6ieCFC6q_HzgM49e2Z0d86dLQq9XNKB4xZyju7Uiv1aHOrl5TZPCE92VfuOIY8NuFGOyQ3gNbSo3OVcmei3c3KvaaGkFpdZUHfYRSaoASOe2Gf_Oo3b31Q2ZUqi7rs_rezP1gq9cAE9kYAzkhmvd4H8RUujQzVhNCg2pOs8cU9e1pbyNONoo6_1otYNzGTCSPdSfMaZTzeYSMLGNqYCasBxFXn8IhIzEJZnx8TySCyCeFbD8ihCZUFUf4VIgsHlAUjta4BwIJUaqueucEzqGNuMtNSkAENmaq8m4AB4VwpZeKQy0aTmShlMmWPnl9zqSEOR7IrZaa9JZNV-KOIE=w1045-h731-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/it51T1xNMfORjYACZhQQ5IANBCEVRvx1p87EmnKWPK9neC7kenp_6YPdTQo44xxyMjEt7cDJcGpCQZyN_4NkiYLeteZeqvyf6S0CRyh9iHcBrVsy-KWIgNBjn3O-SN2rvPNlleLcxMdNwSqY4niLmyeaWt0UItOCLOUw1UjnzUm-lSPIERh9mj6wo7pXGQ3s37HN01G-tPLm8SdDlPk1SJU3JUosCAQhy85dorSRfo19wi7QDpgtYAJsffBPp3ddpl6d-Jd9FN3ZrF2sfMoDcxOdZXTpeRmqte1bolyrBTqi-TxTGc9krPJguS4KmcUi1Jpi0dgNYZSyNFIWRkMbF_zVga1aprLq-di6PcXMfi1qKaZfMpGuNX8ggKY8_5TG0zIuO4103YuHOtYfAG5SIdb0D_Y8VGREbdQOm8qiL6uuWyudK5jJNqDoaZYSTSd2y0uw5cEbld4xdbbltnj2FIW8L4I9Uxv0JRTJviIkBpidrk87ptsqVk0JTpRFjNcQU_gj1mXhdBLxqPR1mg2BPSd3HHPW3et-jjaQs7qocYna9tbEdwADqiheSycQI2f48vcjpTyZ2aMfHImybQFvO55X0PVWuGsUglIJW9XPjoJQdCEyzeo83U-QHRfm5xHj2UmGRMfccuM7W7ml6vySMsv60ZJCOmmMsCdnGnZmiap-4Mgl3rPL_UAVzI0JDX9NI9MJnoQnel9Gh2nkqwcU6hQ=w684-h712-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/R7152CgP2HvR0lQKLMwnzERAl2DT4A7X4b6ekodjRjuUAEiIE6vt1i-Xcb3ZB8UB225EKtsUqIYNWIXgIBVc3o3EokJZmPAnZtkXxS6bwEvt4EqG6SimFTSVRJJ94_rvvDtH2SigFeLqRlre_JfVnEv-G-5xPuNv8Kwztsh27fqzOgc_r-Oh8UV91_vZxo-vCDOOw8quReok9SFbC4hdK56bakc6IhfkLGDWUjyj3HaGl4MZOp81eIwpYKf_nfn_dFYzRX0WYmfAWmjiQGjsplOtqBdqSUsbrVmbZ_60aLHM5O2VdgbqXyIEDEe3_Y_5Y0GF8Zz0q4k5U9q05gNGvt7JlsEqun3C-Ofzj1GCpUne1kkQcWbYOYbqv338T8LArUmS0AinTWyLxFK1z6nyGH5ShUJvCmhtnMnMLMpo_MOqZRq250ErlDgVIl8zC6v57jrIYtFDy2InYs5p2EgijYgTh4pMSwXYWSQEXip-SgrrvmGPS6LIGx1KITA2Uo5NyeWIl70VcfIYkSj6M5GiwEn6MiLndw9puyj46WuVb3rdmoqopue1DKH2R9vEwN97YCoK7F1Cu_swCAcNQjIghi8bbRS-m9IbwD-NqkdetKkwvDPA4Ezh3HF2OGlHu6XUVZe3GB6Qq7pY_iXUgdAMCrafBeP31metIu-TXC1W6OzvyX3buykvy8wyuIVy81IRaN1sbJdHUMwnV7NSstO0hGw=w889-h751-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/Ii1emC2rlLP_v1CmJB-T8O8F5Y_o7ZxfDYuMA-jCTGsEZhdU296FiUFsdjg8yr4Hj2hqEhYXX2Nqe_Ap1L-ahA4LRefatQQs3Kf3_mwzX_10ydKfrE6koWYwHAddaqp88D8qh4Zo_dLns0ixhBO57OSjLT4Q6pkiSUWmxeo22ueD56wY4dopgTn3-mBONWxObY20kg-g4UL00klxeTXyvL5dcR3mjgwyOaVEwW0Qs9RwezYobOcsGggbrdaCj923_-IDg68WXL6gxNM-GfMqpBhqYkxeTStU9txKEn7_ZCmNu61WTVmgGxKaKwZFEM-aK-wxLWCQ4L1lZU8RUGQJVIP9K9IV4leA_rma-8CQqngWPJWzGbdfWZz6rdZ1aSBItDlJK-FmTpRjjDYW7kfCLXCigKPFox_2pbCn7RzW9C02sUUrv7wbS2Mn3f2_PG27RbXauE6QZQCVIA9PcntCD6WQVEbU4xfcxkU198eI2KWTS43usN95I6kiXVsSbmGW3ONGDP_EulGTuUx_HWWdBGuvDu_XiGXXvt0KqCu_cIyO-Sfzup2UrDhu70LjS76JB51TX44x-Np0WcKs53KJF4akOoyGYUkoURrkuvFD3ktWq2v2J_rYQFPPie-cR2SpN7fQdWR7E6_v1XPGTP3PkKsK-U3mqCbTIKfwnZK79BKrQeds8-pcHw1TbN7GLIxRWKRnFBzeGig8dGwFJJiI-5s=w1071-h777-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/u6QktFtCNdWlYtOFL7mhBX1RbAsCk_XB2DtROQOpRI1uLuxupeseF1Ges-0mMshIuietDzc542iGBd65bCzJJZfnfxl1DXKK0KpKQ2TD-tE6n0uqnckFnMUpD8mGGhD_4Px_rwJv2ubbBOsyo96e0-i1Iv-3n_HbAEV0Jchpq7SUv8UAhf2tkVtMhF1XS8ff9Q1RkqYxrK-mEdSvvy8m6cjxQuyhW0KUAGZriN-8GMqZWcjgfmwQgkkpqxFwv3WrUCEtR66YMOUX0kacimP0BHziylNKFCaqYEcTa_iBckr_1n5uwBrdwTH91xd_tB7LkBpr0RM8CLN9t8YcHvHgBpD0iBznyLRXOTGW7sOyslIFn_diGnqFGy30S26zuM7wL4QvSnc4l6zjOEb4aKjLsVo9G2MVRU737CYaZFeQ4S4Ozv2X6Mx-Vfm9Z44cnCcsgVuFxXVN7I5omzQwnESf5leqMfDjH6oLrCHeBa_0W_QrNdmFxaSw2tFmtYgUDly5eV_ghaDKVDziPyZ9wxxWTXNM4mMB5XH9FJ9r7QVe_pLel3icD9HWW9xe_0VrCUG3V4QnAMxyM7-HepY5p21ngmCVLyoE490B76ZSaK3Q1fOiV1mILznSDILcloXwTUlwpSRrCEEJeCOrB_Zm4_q78dh8JbqA-3vRoONa0N1xG_bht46nfNXXxpw5pFjOe9b351Gca1wcVpRI2LNXIXie_Lo=w1223-h714-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Eight slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/u6QktFtCNdWlYtOFL7mhBX1RbAsCk_XB2DtROQOpRI1uLuxupeseF1Ges-0mMshIuietDzc542iGBd65bCzJJZfnfxl1DXKK0KpKQ2TD-tE6n0uqnckFnMUpD8mGGhD_4Px_rwJv2ubbBOsyo96e0-i1Iv-3n_HbAEV0Jchpq7SUv8UAhf2tkVtMhF1XS8ff9Q1RkqYxrK-mEdSvvy8m6cjxQuyhW0KUAGZriN-8GMqZWcjgfmwQgkkpqxFwv3WrUCEtR66YMOUX0kacimP0BHziylNKFCaqYEcTa_iBckr_1n5uwBrdwTH91xd_tB7LkBpr0RM8CLN9t8YcHvHgBpD0iBznyLRXOTGW7sOyslIFn_diGnqFGy30S26zuM7wL4QvSnc4l6zjOEb4aKjLsVo9G2MVRU737CYaZFeQ4S4Ozv2X6Mx-Vfm9Z44cnCcsgVuFxXVN7I5omzQwnESf5leqMfDjH6oLrCHeBa_0W_QrNdmFxaSw2tFmtYgUDly5eV_ghaDKVDziPyZ9wxxWTXNM4mMB5XH9FJ9r7QVe_pLel3icD9HWW9xe_0VrCUG3V4QnAMxyM7-HepY5p21ngmCVLyoE490B76ZSaK3Q1fOiV1mILznSDILcloXwTUlwpSRrCEEJeCOrB_Zm4_q78dh8JbqA-3vRoONa0N1xG_bht46nfNXXxpw5pFjOe9b351Gca1wcVpRI2LNXIXie_Lo=w1223-h714-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ninth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="https://lh3.googleusercontent.com/XFI29vCBqamPU_eW4KyBIxDKpTWQPu2zP9bLPKLeROolklMF0OJBuOcQG6532xf_IBQhzAS-R8Gl4_vepXl6ovYix6sct2HRywH1uI1EUc_AMjMfaxeKQUHtMAemWxGA6Sz-9LFPZAyKXQIOCyiaLWR_HtIaPGP6NoA9x_fapm1suMs62lIK2GExiQDAna5bC15qXPWT1VyT6_d0r4InjAlPsCj24nZ8y20YAm1o_01eIlv6V697Ii7Kvkr6whUtAOcYpwRFtql_7SPWji_Q2yRH1OoFSJkKArPVwvhAPJBGOIC01YmuQ2xOIaBWjtXKPr6jlXxI5vR75q2LbViv5DPk8FYmSn9zFPWAVnODXUl0HRD4ZT6cj2Gn1PqH8jY_VEw9ZoK_o8XoEERv6488-JrSPvVrFMivPpOOXcUSnTuASYbl4TXAxUItO8_9A7bX_ob7uyfeKB-L_bcMEVJiQfwtkdZr27NV6kpaQ4gafaxcvjvoDRqmPhiweEPk_z_VJ8o9oiyZHSCtzNFsB7nAjmwH04aHPDygcYAL2yCSKfbng4Fu22AH4QwfHv0hhP0qx_igR8MEuuNRzzDwGsSo6Jcuge2dufgcJ_0L9zjKIdizlsK1xoPssCp9sW6KlPyeE-2daT2CIfg3HItV4xrVUagtqavDuMl6evy4hqM7fqPbqyp3JJ6txzY28O4zDfqQrdxLbypgYCj2HdvdQAIz9ns=w687-h722-no?authuser=0"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Tenth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    
     </div>
     <Footer/>
     </>
 )
    
    
}