const parseContent = (content: any) => {
  if(!content) return '';

  let qList = content.map((qItem: any) => {
    let result = '';

    if(typeof qItem === 'object') {
      if(qItem?.type === 'u') {
        result = '<u>' + (qItem?.content || '').toString().trim() + '</u>';
      } else if(qItem?.type === 'br') {
        result = '<br>';
      } else {
        result = (qItem?.content || '').toString().trim();
      }
    } else if(typeof qItem === 'string') {
      result = (qItem || '').toString().trim();
    }

    return result;
  });

  return (qList || []).join('').trim();
}

export {parseContent}