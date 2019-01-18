const steps = [
    {
        id:0, 
        stepText: '', 
        images:['https://d3dmzhdwhxl7fz.cloudfront.net/assets/senioradvisor/comm-1ada6d7214a6eb6be60ae19722671c26.jpg', 'https://d3dmzhdwhxl7fz.cloudfront.net/assets/senioradvisor/mobile-map-no-loc-d1bf1aef872b983cfff454c36047168e.jpg'], 
        notificationMessage:'<span>Over 100,000 Reviews</span><div>Confirm Your Email Address Below. You Can Unsubscribe at Anytime</div><div><i class="material-icons">star</i> <i class="material-icons">star</i> <i class="material-icons">star</i> <i class="material-icons">star_half</i></div>', 
        title: 'Find Senior Living Options in Your Local Area', 
        className:'purple-notification',
        inputListType:[{require:true, placeholder:'Enter City, State or Zip', type:'zip'}],
        icon:'where_to_vote',
        buttonText:'Next'
    },
    {
        id:1, 
        stepText: '', 
        images:['https://d3dmzhdwhxl7fz.cloudfront.net/assets/senioradvisor/blurred-reviews-short-8dfaab9705a82e6fe10b5b9833886c51.jpg'], 
        notificationMessage:'Confirm Your Email Address Below.</br> You Can Unsubscribe at Anytime', 
        title: 'Find Senior Living Options in Your Local Area', 
        className:'purple-notification',
        inputListType:[{require:true, placeholder:'Email Address', type:'email'}],
        icon:'email',
        buttonText:'Next'
    },
    {
        id:2, 
        stepText: '', 
        images:['https://d3dmzhdwhxl7fz.cloudfront.net/assets/senioradvisor/comm-1ada6d7214a6eb6be60ae19722671c26.jpg', 'https://d3dmzhdwhxl7fz.cloudfront.net/assets/senioradvisor/mobile-map-no-loc-d1bf1aef872b983cfff454c36047168e.jpg'], 
        notificationMessage:'<span>Last Step - Complete the Form Below to Get <span>Free Info</span> &amp; View <span>Local Options</span>:</span>', 
        title: 'Find Senior Living Options in Your Local Area', 
        className:'purple-notification',
        inputListType:[{require:true, placeholder:'First & Last Name', type:'text'}, {require:true, placeholder:'Phone Number: ()-', type:'phone'}],
        icon:'person',
        buttonText:'Get Your Results'
    }

]

export default steps;