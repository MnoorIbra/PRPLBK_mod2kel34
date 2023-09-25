import React from 'react';
const asisten = {
 name : 'Kelompok 09 RPLBK',
 jurusan : 'Teknik Komputer 2020'
};
function greetings(asisten){
 return asisten.name + ' dari ' + asisten.jurusan;
}
//menggunakan JSX
const ReactJSX = () => {
 return (
 <div>
 <h1>KELOMPOK 09 PRAKTIKUM RPLBK</h1>
 <h2>Berikut ini profil anggota kami</h2>

 </div>
 
 );
}
//tidak menggunakan JSX
const ReactNoJSX = () => {
 return React.createElement('div', null,
 React.createElement('h1', null, 'Halo Praktikan hehe'),
 React.createElement('h2', null, 'Nama saya ',
greetings(asisten)),
 React.createElement('p', {style:{color:'#ff0000'}}, 'ini adalah contoh tanpa JSX')
 )
}
export default ReactJSX;
// export {ReactNoJSX};