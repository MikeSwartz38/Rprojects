// curl -X "GET" "https://api.spotify.com/v1/me/tracks?market=ES&limit=1&offset=0" 
// -H "Accept: application/json" 
// -H "Content-Type: application/json" 
// -H "Authorization: Bearer BQAxaPMmTqMI4MQSlO3Ebd2aNH4TapgLkHB0Nn6OjGGnBVmhiZJBENxTxeOGh8-lDFY8N9J3gTNd76A12bmXTicm9BFl1iZAglQrDS3-5yg0C8L_L1LYyW-Xv-ToY_CI7FlN6J5La941IX8RTjVd880ELE7BhL8P1o-YtR5r8z1NoLoccdJAIKBC-qF6GNvdoUoZ';

const accessToken = 'BQD18_mNMTTxwKaHaOl9aZDAPuEe_dpgZDGg6or1rEWcJtDrp0yWFxE09LnOmZKPhQMsXMlFIR_FczoViIhSSIUR7Sw3zSsIYgUtfbW9XQAAx5zKm7MDBlOEvwBwrEGGrV2YqsyCtsw6ZdTD_gIe490PFXj4EgxT80Qe&refresh_token=AQCkCJjcaqD9STjHgKRxljRR_TNsBnQCf-sKjEmZTFa9KBV1qqIEiAgLpYRqG0pwzf-jpmWhR3yqjX2yVxCVvMVML0meksem5_7mnFUKu4qb1y5CUjaqSlBpB_C6_aKY4XIuxg'

$.ajax({
    url:'https://api.spotify.com/v1/me/tracks?market=ES&limit=1&offset=0',
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + 'BQAxaPMmTqMI4MQSlO3Ebd2aNH4TapgLkHB0Nn6OjGGnBVmhiZJBENxTxeOGh8-lDFY8N9J3gTNd76A12bmXTicm9BFl1iZAglQrDS3-5yg0C8L_L1LYyW-Xv-ToY_CI7FlN6J5La941IX8RTjVd880ELE7BhL8P1o-YtR5r8z1NoLoccdJAIKBC-qF6GNvdoUoZ');
        xhr.setRequestHeader('Accept-Language', 'en_US');
    },
    type: 'GET',
    contentType: 'application/json',
    dataType: 'JSON',
    success: function (response) {
        console.log(response);
    },
    error: function() {
        alert("it failed");
    }
});