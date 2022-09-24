      const form = document.createElement('form');
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('name', 'pdffFile');
      input.setAttribute('id', 'pdffFile');
      const iframe = document.createElement('iframe');
      iframe.setAttribute('id', 'vistaPrevia');
      iframe.setAttribute('width', '400');
      iframe.setAttribute('height', '400');

      form.append(input);
      form.append(iframe);

      document.body.append(form);

      document.querySelector('#pdffFile').addEventListener('change', () => {
        let pdffFile = document.querySelector('#pdffFile').files[0]
        let pdffFileURL = URL.createObjectURL(pdffFile)

        document.querySelector('#vistaPrevia').setAttribute('src', pdffFileURL)
      })
