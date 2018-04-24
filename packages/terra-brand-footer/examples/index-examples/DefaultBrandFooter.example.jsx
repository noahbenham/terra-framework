import React from 'react';

import BrandFooter from '../../lib/BrandFooter';

export default () =>
  <BrandFooter
    links={[
      { text: 'Terra UI', href: 'http://terra-ui.com/' },
      { text: 'Terra UI Components', href: 'http://terra-ui.herokuapp.com/static/#/site/components' },
      { text: 'Cerner Home', href: 'https://www.cerner.com/' },
      { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
    ]}
    contentLeft={
      <a
        href="http://terra-ui.com/"
        style={{
          backgroundColor: 'transparent',
          color: '#0065a3',
          textDecoration: 'none',
        }}
      >
        <svg
          style={{
            border: '0',
            maxWidth: '100%',
            height: '40px',
            verticalAlign: 'top',
          }}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 40"
        >
          <path fill="#80c7ee" d="M33.07,10,18.77,1.78a2,2,0,0,0-1-.26,2.06,2.06,0,0,0-1,.26L2.51,10a2,2,0,0,0-1,1.7V28.26a2,2,0,0,0,1,1.7L16.8,38.22a2.06,2.06,0,0,0,1,.26,2,2,0,0,0,1-.26L33.07,30a2,2,0,0,0,1-1.7V11.74A2,2,0,0,0,33.07,10Z" /><circle fill="#f1f1f2" cx="26.56" cy="12.77" r="2" /><circle fill="#f1f1f2" cx="17.7" cy="20.4" r="7.3" /><path fill="#f1f1f2" d="M28.22,27.5a2.16,2.16,0,0,1-.29-.43,2.2,2.2,0,0,1-.3.43,1.86,1.86,0,0,1-.45.39,2.11,2.11,0,0,1,.45.39,2.2,2.2,0,0,1,.3.43,2.16,2.16,0,0,1,.29-.43,2.74,2.74,0,0,1,.45-.39A2.33,2.33,0,0,1,28.22,27.5Z" /><path fill="#f1f1f2" d="M7.76,12.68a2.49,2.49,0,0,1-.29-.43,2.49,2.49,0,0,1-.29.43,2.27,2.27,0,0,1-.45.38,2,2,0,0,1,.45.39,2.09,2.09,0,0,1,.29.42,2.42,2.42,0,0,1,.29-.42,1.79,1.79,0,0,1,.44-.39A2,2,0,0,1,7.76,12.68Z" /><path fill="#047cc0" d="M7.47,12.25a2.49,2.49,0,0,0,.29.43,2,2,0,0,0,.44.38,1.79,1.79,0,0,0-.44.39,2.42,2.42,0,0,0-.29.42,2.09,2.09,0,0,0-.29-.42,2,2,0,0,0-.45-.39,2.27,2.27,0,0,0,.45-.38,2.49,2.49,0,0,0,.29-.43m0-1.28a2.92,2.92,0,0,1-.65,1.36,2.3,2.3,0,0,1-1.17.73,2.25,2.25,0,0,1,1.17.74,2.84,2.84,0,0,1,.65,1.35,2.74,2.74,0,0,1,.64-1.35,2.24,2.24,0,0,1,1.18-.74h0a2.24,2.24,0,0,1-1.18-.74A2.74,2.74,0,0,1,7.47,11Z" /><path fill="#047cc0" d="M27.93,27.07a2.16,2.16,0,0,0,.29.43,2.33,2.33,0,0,0,.45.39,2.74,2.74,0,0,0-.45.39,2.16,2.16,0,0,0-.29.43,2.2,2.2,0,0,0-.3-.43,2.11,2.11,0,0,0-.45-.39,1.86,1.86,0,0,0,.45-.39,2.2,2.2,0,0,0,.3-.43m0-1.33a3,3,0,0,1-.67,1.39,2.33,2.33,0,0,1-1.21.76,2.29,2.29,0,0,1,1.21.76A3,3,0,0,1,27.93,30a2.85,2.85,0,0,1,.66-1.39,2.33,2.33,0,0,1,1.21-.76h0a2.33,2.33,0,0,1-1.21-.76,2.85,2.85,0,0,1-.66-1.39Z" /><path fill="#047cc0" d="M26.56,10a2.76,2.76,0,0,0-1.43,5.12l0,.07c-.18.29-.38.6-.59.91a8,8,0,0,0-2.65-2.6,6.42,6.42,0,0,0-.68-.37A8.06,8.06,0,0,0,10.43,23.87a1.14,1.14,0,0,0,.1.19c-1.82,2.61-2.61,4.69-1.89,5.41a1.07,1.07,0,0,0,.77.26c1,0,2.67-.79,4.63-2.15l.19.09a8,8,0,0,0,3.47.79,8.07,8.07,0,0,0,8.05-8.06A7.87,7.87,0,0,0,25,16.93l-.09-.18c.32-.47.62-.92.87-1.35A2.76,2.76,0,1,0,26.56,10ZM10.4,20.4a7.31,7.31,0,0,1,7.3-7.3,7.22,7.22,0,0,1,3.14.71c.22.11.42.22.62.34A7.24,7.24,0,0,1,24,16.64a.64.64,0,0,1,.08.14,45.05,45.05,0,0,1-4.61,5.35,45.6,45.6,0,0,1-5.35,4.61l-.14-.08a7.5,7.5,0,0,1-2.49-2.49c-.12-.2-.23-.41-.33-.62A7.26,7.26,0,0,1,10.4,20.4Zm-1,8.66a.5.5,0,0,1-.3-.06c-.14-.14-.22-1.07,1.2-3.39.18-.3.37-.6.58-.91a8.12,8.12,0,0,0,2.51,2.51h0C10.93,28.88,9.78,29.06,9.41,29.06ZM25,20.4a7.31,7.31,0,0,1-10.26,6.68,46.62,46.62,0,0,0,5.15-4.48,45.62,45.62,0,0,0,4.48-5.16A7.35,7.35,0,0,1,25,20.4Zm1.56-5.63a2,2,0,0,1-.43,0,10.73,10.73,0,0,0,.67-1.49.69.69,0,0,0-.63-.2,9.19,9.19,0,0,1-.66,1.43,2,2,0,1,1,1,.3Z" /><path fill="#f1f1f2" d="M17.79,1.52a2,2,0,0,1,1,.26L33.07,10a2,2,0,0,1,1,1.7V28.26a2,2,0,0,1-1,1.7l-14.3,8.26a2,2,0,0,1-1,.26,2.06,2.06,0,0,1-1-.26L2.5,30a2,2,0,0,1-1-1.7V11.74a2,2,0,0,1,1-1.7L16.8,1.78a2.06,2.06,0,0,1,1-.26m0-1.52A3.48,3.48,0,0,0,16,.47L1.74,8.72a3.51,3.51,0,0,0-1.74,3V28.26a3.51,3.51,0,0,0,1.74,3L16,39.53a3.48,3.48,0,0,0,1.75.47,3.44,3.44,0,0,0,1.74-.47l14.3-8.25a3.49,3.49,0,0,0,1.75-3V11.74a3.49,3.49,0,0,0-1.75-3L19.53.47A3.44,3.44,0,0,0,17.79,0Z" /><path fill="#f1f1f2" d="M39.36,15.91v-2h8.79v2H44.94v8.75H42.57V15.91Z" /><path fill="#f1f1f2" d="M49.78,22.8a1.9,1.9,0,0,0,1.38.46,1.86,1.86,0,0,0,1.11-.32,1.31,1.31,0,0,0,.57-.68h1.88a3.57,3.57,0,0,1-1.38,2,4.07,4.07,0,0,1-2.26.6,4.53,4.53,0,0,1-1.65-.29,3.53,3.53,0,0,1-1.25-.84,3.83,3.83,0,0,1-.79-1.29,4.86,4.86,0,0,1-.28-1.66,4.52,4.52,0,0,1,.29-1.62,3.86,3.86,0,0,1,.81-1.3A3.71,3.71,0,0,1,49.47,17a4,4,0,0,1,1.61-.32,3.74,3.74,0,0,1,1.73.38,3.47,3.47,0,0,1,1.21,1,4.2,4.2,0,0,1,.69,1.48,5.48,5.48,0,0,1,.15,1.73H49.25A2.11,2.11,0,0,0,49.78,22.8Zm2.41-4.09A1.52,1.52,0,0,0,51,18.29a2,2,0,0,0-.85.17,1.8,1.8,0,0,0-.54.43,1.55,1.55,0,0,0-.28.54,2.17,2.17,0,0,0-.1.51h3.47A2.51,2.51,0,0,0,52.19,18.71Z" /><path fill="#f1f1f2" d="M58.15,16.89v1.44h0a2.51,2.51,0,0,1,.41-.66,2.43,2.43,0,0,1,.58-.53,2.73,2.73,0,0,1,.71-.34,2.54,2.54,0,0,1,.78-.12,1.71,1.71,0,0,1,.47.08v2l-.36,0a3,3,0,0,0-.41,0,2.27,2.27,0,0,0-1,.19,1.82,1.82,0,0,0-.66.53,2.27,2.27,0,0,0-.35.79,4.32,4.32,0,0,0-.11,1v3.5H56.12V16.89Z" /><path fill="#f1f1f2" d="M64.15,16.89v1.44h0a2.67,2.67,0,0,1,1-1.19,2.73,2.73,0,0,1,.71-.34,2.54,2.54,0,0,1,.78-.12,1.65,1.65,0,0,1,.46.08v2l-.36,0a2.75,2.75,0,0,0-.4,0,2.27,2.27,0,0,0-1,.19,1.82,1.82,0,0,0-.66.53,2.27,2.27,0,0,0-.35.79,4.32,4.32,0,0,0-.11,1v3.5H62.12V16.89Z" /><path fill="#f1f1f2" d="M68.25,18a2.54,2.54,0,0,1,.84-.79,3.6,3.6,0,0,1,1.15-.43,6.27,6.27,0,0,1,1.29-.13,9.64,9.64,0,0,1,1.19.08,3.75,3.75,0,0,1,1.09.33,2.14,2.14,0,0,1,.82.66,1.9,1.9,0,0,1,.31,1.14v4a8.07,8.07,0,0,0,.06,1,1.82,1.82,0,0,0,.21.72H73.05a2.24,2.24,0,0,1-.1-.37,2.32,2.32,0,0,1,0-.38,2.76,2.76,0,0,1-1.21.74,4.82,4.82,0,0,1-1.41.21,3.84,3.84,0,0,1-1-.14,2.37,2.37,0,0,1-.84-.42,1.9,1.9,0,0,1-.56-.72,2.38,2.38,0,0,1-.2-1,2.23,2.23,0,0,1,.23-1.09,1.88,1.88,0,0,1,.6-.68,2.67,2.67,0,0,1,.84-.38,8.24,8.24,0,0,1,1-.21l.94-.12a5.8,5.8,0,0,0,.83-.13,1.38,1.38,0,0,0,.57-.27.57.57,0,0,0,.2-.5,1.09,1.09,0,0,0-.12-.55.75.75,0,0,0-.3-.31,1,1,0,0,0-.43-.15,3.12,3.12,0,0,0-.54,0,1.62,1.62,0,0,0-1,.27,1.21,1.21,0,0,0-.42.9H67.88A2.49,2.49,0,0,1,68.25,18Zm4.22,3-.44.11-.49.08-.51.07a3.59,3.59,0,0,0-.47.12,1.56,1.56,0,0,0-.41.2,1.09,1.09,0,0,0-.27.33,1,1,0,0,0-.11.49,1,1,0,0,0,.11.48.77.77,0,0,0,.28.31,1.11,1.11,0,0,0,.42.16,2.73,2.73,0,0,0,.5.05,1.93,1.93,0,0,0,1-.21,1.46,1.46,0,0,0,.51-.51,1.65,1.65,0,0,0,.2-.59c0-.2,0-.36,0-.48v-.8A1.11,1.11,0,0,1,72.47,21.05Z" /><path fill="#f1f1f2" d="M80.46,13.93v6.64a5.24,5.24,0,0,0,.21,1.59,2.68,2.68,0,0,0,.62,1.07,2.49,2.49,0,0,0,1,.6A4.47,4.47,0,0,0,83.6,24a4.56,4.56,0,0,0,1.34-.19,2.49,2.49,0,0,0,1-.6,2.68,2.68,0,0,0,.62-1.07,5.24,5.24,0,0,0,.21-1.59V13.93h1V20.8a5.42,5.42,0,0,1-.23,1.57,3.42,3.42,0,0,1-.74,1.3,3.65,3.65,0,0,1-1.29.88,5,5,0,0,1-1.92.32,4.94,4.94,0,0,1-1.9-.32,3.47,3.47,0,0,1-1.29-.88,3.42,3.42,0,0,1-.74-1.3,5.1,5.1,0,0,1-.23-1.57V13.93Z" /><path fill="#f1f1f2" d="M91.31,13.93V24.66h-1V13.93Z" />
        </svg>
      </a>
    }
    contentRight={
      <svg
        style={{
          border: '0',
          maxWidth: '100%',
          height: '40px',
          verticalAlign: 'top',
        }}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 40"
      >
        <path d="M10.65,2.84a5,5,0,0,1,1,.1,2.75,2.75,0,0,1,.88.35,1.79,1.79,0,0,1,.6.65,2,2,0,0,1,.23,1,2.06,2.06,0,0,1-.11.65,1.88,1.88,0,0,1-.3.58,2.18,2.18,0,0,1-.47.44,1.74,1.74,0,0,1-.61.25v0A2,2,0,0,1,13.72,9a3.93,3.93,0,0,1,0,.46,2.11,2.11,0,0,1-.15.53,2.14,2.14,0,0,1-.31.54,1.9,1.9,0,0,1-.54.46,3.27,3.27,0,0,1-.84.32,4.69,4.69,0,0,1-1.2.13H7V2.84Zm0,3.76a2.68,2.68,0,0,0,.85-.12,1.7,1.7,0,0,0,.6-.31,1.31,1.31,0,0,0,.36-.46,1.39,1.39,0,0,0,.12-.57c0-1.07-.64-1.6-1.93-1.6H7.84V6.6Zm0,4.11a4.08,4.08,0,0,0,.87-.08,1.9,1.9,0,0,0,.72-.28,1.5,1.5,0,0,0,.49-.54A1.86,1.86,0,0,0,12.91,9a1.43,1.43,0,0,0-.58-1.24,2.85,2.85,0,0,0-1.68-.42H7.84v3.42Z" fill="#9ad4ed" /><path d="M19.5,11.41V10.29h0a2.14,2.14,0,0,1-.87,1,2.51,2.51,0,0,1-1.27.33,2.68,2.68,0,0,1-1-.17,1.55,1.55,0,0,1-.67-.46,1.76,1.76,0,0,1-.38-.73,3.7,3.7,0,0,1-.12-1v-4h.75v4a2.06,2.06,0,0,0,.39,1.27,1.6,1.6,0,0,0,1.27.43,1.59,1.59,0,0,0,.84-.21,1.82,1.82,0,0,0,.58-.56,2.44,2.44,0,0,0,.33-.79,4.06,4.06,0,0,0,.11-.92V5.22h.76v6.19Z" fill="#9ad4ed" /><path d="M22.67,2.84V4.05h-.76V2.84Zm0,2.38v6.19h-.76V5.22Z" fill="#9ad4ed" /><path d="M25.16,2.84v8.57h-.75V2.84Z" fill="#9ad4ed" /><path d="M29.38,5.22v.63H28.12V10a1.31,1.31,0,0,0,.1.58c.07.14.24.22.51.23s.43,0,.65,0v.63l-.34,0h-.33a1.48,1.48,0,0,1-1.06-.3,1.44,1.44,0,0,1-.29-1.08V5.85H26.28V5.22h1.08V3.36h.76V5.22Z" fill="#9ad4ed" /><path d="M34.59,5.22l1.58,5.3h0l1.51-5.3h.85l1.51,5.3h0l1.58-5.3h.8l-2,6.19h-.83L38.14,6.2h0L36.6,11.41h-.82l-2-6.19Z" fill="#9ad4ed" /><path d="M44.37,2.84V4.05h-.76V2.84Zm0,2.38v6.19h-.76V5.22Z" fill="#9ad4ed" /><path d="M48.59,5.22v.63H47.33V10a1.31,1.31,0,0,0,.1.58c.07.14.24.22.51.23l.65,0v.63l-.34,0h-.34a1.46,1.46,0,0,1-1-.3,1.44,1.44,0,0,1-.29-1.08V5.85H45.49V5.22h1.08V3.36h.76V5.22Z" fill="#9ad4ed" /><path d="M50.6,2.84V6.28h0a1.81,1.81,0,0,1,.77-.9A2.24,2.24,0,0,1,52.6,5a3.17,3.17,0,0,1,1.09.16,1.78,1.78,0,0,1,.7.48,1.76,1.76,0,0,1,.37.75,4.28,4.28,0,0,1,.11,1v4h-.76V7.54A3.35,3.35,0,0,0,54,6.81a1.62,1.62,0,0,0-.25-.6,1.12,1.12,0,0,0-.49-.39,1.72,1.72,0,0,0-.76-.15,2.09,2.09,0,0,0-.81.16,1.69,1.69,0,0,0-.6.45,2.09,2.09,0,0,0-.38.67,2.34,2.34,0,0,0-.15.85v3.61h-.76V2.84Z" fill="#9ad4ed" /><path d="M.31,27.35c0,2,2,3.95,5.13,5-.63,3.16-.11,5.7,1.6,6.69s4.4.31,6.9-1.87c2.43,2.1,4.9,2.92,6.61,1.93s2.3-3.74,1.66-7c3.27-1.08,5.1-2.7,5.1-4.77s-2-3.71-5.09-4.78c.69-3.39.1-5.87-1.69-6.9s-4.21-.13-6.68,2c-2.57-2.28-5-3-6.82-1.94s-2.22,3.59-1.59,6.8C2.41,23.61.31,25.37.31,27.35Z" fill="#f1f1f2" /><path d="M22.19,23.32l-.83-.26c.05-.19.09-.38.13-.57.63-3.07.22-5.54-1.19-6.35s-3.57,0-5.8,2c-.23.19-.44.39-.65.59l-.43-.4c-2.34-2.08-4.69-3-6.1-2.14s-1.75,3.11-1.18,6c.05.28.12.57.19.85-.33.1-.66.2-1,.31-2.75.95-4.5,2.45-4.5,4s1.88,3.22,4.74,4.2l.7.22c-.07.3-.14.61-.2.92-.54,2.86-.12,5.13,1.23,5.91s3.73,0,6-2l.54-.5c.23.22.47.43.71.64,2.2,1.89,4.38,2.66,5.73,1.88s1.84-3.24,1.25-6.21c0-.22-.1-.46-.15-.69l.48-.15c3-1,4.91-2.58,4.91-4.21s-1.81-3.07-4.62-4Z" fill="#5fc1ed" /><path d="M21.55,30.52l-.44.13a24.86,24.86,0,0,0-1.31-3.28,26.19,26.19,0,0,0,1.26-3.24l.77.24c2.4.83,3.87,2.05,3.87,3s-1.58,2.31-4.15,3.16Zm-1.07,2.11a9.41,9.41,0,0,1,.13,3.42,2.33,2.33,0,0,1-.85,1.61c-.82.47-2.57-.14-4.45-1.76-.22-.19-.44-.39-.65-.6a26,26,0,0,0,2.17-2.76A25.37,25.37,0,0,0,20.34,32c.06.21.1.42.14.63ZM9.71,37.58a2.31,2.31,0,0,1-1.82.07c-.82-.47-1.16-2.3-.69-4.74,0-.29.12-.58.19-.86a28.35,28.35,0,0,0,3.49.51,27.73,27.73,0,0,0,2.23,2.75l-.5.45a9.22,9.22,0,0,1-2.9,1.82ZM6,30.51a9.23,9.23,0,0,1-3-1.61,2.29,2.29,0,0,1-1-1.54c0-.94,1.4-2.15,3.75-3l.9-.28a26.42,26.42,0,0,0,1.26,3.28,27.12,27.12,0,0,0-1.28,3.32ZM7.22,22c-.48-2.49-.16-4.37.65-4.84s2.79.21,4.81,2q.2.16.39.36a27.31,27.31,0,0,0-2.21,2.73,29.17,29.17,0,0,0-3.46.54L7.22,22Zm11.19,2.77c-.25-.44-.51-.88-.79-1.3a23.35,23.35,0,0,1,2.37.41,22.18,22.18,0,0,1-.83,2.24q-.36-.69-.75-1.35Zm-4.56-4.45c.51.55,1,1.17,1.53,1.84-1,0-2.05,0-3.07,0,.5-.66,1-1.28,1.54-1.84ZM9.26,24.74c-.26.44-.5.89-.73,1.34a22.83,22.83,0,0,1-.83-2.24,23,23,0,0,1,2.35-.4C9.78,23.87,9.51,24.3,9.26,24.74Zm.82,6.62A22.59,22.59,0,0,1,7.69,31a22.16,22.16,0,0,1,.84-2.29c.23.45.48.9.73,1.34S9.79,30.93,10.08,31.36Zm3.8,3.15a23,23,0,0,1-1.56-1.87c.5,0,1,0,1.52,0s1.05,0,1.56,0A23.2,23.2,0,0,1,13.88,34.51Zm5.29-5.86A22.77,22.77,0,0,1,20,30.93a23,23,0,0,1-2.42.41c.27-.43.54-.87.8-1.32s.51-.91.75-1.37Zm-1.71.82c-.4.68-.81,1.35-1.25,2-.77.05-1.56.08-2.37.08s-1.6,0-2.35-.07c-.45-.66-.87-1.33-1.27-2s-.76-1.38-1.11-2.09c.35-.71.71-1.41,1.11-2.09h0c.39-.69.81-1.35,1.26-2,.77-.05,1.56-.08,2.36-.08s1.59,0,2.36.08c.44.66.86,1.32,1.25,2s.77,1.38,1.12,2.08c-.34.71-.72,1.41-1.11,2.1ZM19.74,17.1c.87.5,1.21,2.52.66,5.17,0,.17-.07.34-.11.51a25.73,25.73,0,0,0-3.47-.54,25.51,25.51,0,0,0-2.19-2.74c.19-.19.39-.37.59-.55,1.92-1.67,3.71-2.32,4.52-1.85Z" fill="#f1f1f2" /><path d="M13.84,25a2.32,2.32,0,1,1-2.32,2.32A2.31,2.31,0,0,1,13.84,25" fill="#5fc1ed" /><path d="M39.57,35.59,35.35,29H32v6.62H29.93V18.94h6.69c3.05,0,5.24,1.95,5.24,5a4.62,4.62,0,0,1-4.34,4.84L42,35.59ZM39.72,24a3.11,3.11,0,0,0-3.35-3.17H32v6.36h4.36A3.14,3.14,0,0,0,39.72,24Z" fill="#f1f1f2" /><path d="M43.61,29.55a6,6,0,0,1,5.94-6.32c3.64,0,5.79,2.85,5.79,6.47v.47H45.6a4.23,4.23,0,0,0,4.32,4.17,5.22,5.22,0,0,0,3.74-1.55l.9,1.22a6.63,6.63,0,0,1-4.79,1.88A6,6,0,0,1,43.61,29.55Zm5.91-4.77a4,4,0,0,0-3.94,4h7.91A3.9,3.9,0,0,0,49.52,24.78Z" fill="#f1f1f2" /><path d="M65.89,35.59V34.21a5.17,5.17,0,0,1-4,1.68,4,4,0,0,1-4.19-4,3.9,3.9,0,0,1,4.19-4,5.08,5.08,0,0,1,4,1.62V27.38c0-1.6-1.3-2.52-3-2.52a4.73,4.73,0,0,0-3.7,1.67l-.87-1.3a6.3,6.3,0,0,1,4.82-2c2.57,0,4.66,1.15,4.66,4.07v8.29Zm0-2.55V30.75a4.06,4.06,0,0,0-3.29-1.48,2.66,2.66,0,1,0,0,5.27A4,4,0,0,0,65.89,33Z" fill="#f1f1f2" /><path d="M70.83,29.55c0-3.57,2.42-6.32,6-6.32a5.15,5.15,0,0,1,4.42,2.1L80,26.45a3.55,3.55,0,0,0-3.07-1.54c-2.54,0-4.16,2-4.16,4.64s1.62,4.66,4.16,4.66A3.63,3.63,0,0,0,80,32.64l1.25,1.15a5.15,5.15,0,0,1-4.42,2.1C73.25,35.89,70.83,33.12,70.83,29.55Z" fill="#f1f1f2" /><path d="M84.28,33.07V25.18h-2V23.53h2V20.24h1.9v3.29h2.44v1.65H86.18v7.49c0,.89.4,1.54,1.19,1.54a1.81,1.81,0,0,0,1.28-.52l.55,1.42a3,3,0,0,1-2.22.78C85.18,35.89,84.28,34.86,84.28,33.07Z" fill="#f1f1f2" />
      </svg>
    }
    contentBottom={
      <span>
        <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
      </span>
    }
  />;
