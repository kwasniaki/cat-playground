package dev.kwasniaki.catplayground.domainApi.dev;

import dev.kwasniaki.catplayground.generated.catplayground.external.api.DevApiDelegate;
import dev.kwasniaki.catplayground.generated.catplayground.external.model.Echo;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;

@NoArgsConstructor
public class DevApiFacade implements DevApiDelegate {

    @Override
    public ResponseEntity<Echo> echo(String message) {
        return ResponseEntity.ok(new Echo(message));
    }
}
