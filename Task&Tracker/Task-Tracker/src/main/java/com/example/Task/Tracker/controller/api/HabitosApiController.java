package com.example.Task.Tracker.controller.api;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.service.HabitosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/habitos")
public class HabitosApiController {

    private final HabitosService habitosService;

    public HabitosApiController(HabitosService habitosService) {
        this.habitosService = habitosService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Habitos>> buscarHabitos(@PathVariable Integer id) {
        return ResponseEntity.ok(habitosService.getHabitosByUsuarioId(id));
    }

    @PostMapping()
    public ResponseEntity<Habitos> salvarHabitos(@RequestBody Habitos habitos){
        return ResponseEntity.ok(habitosService.save(habitos));
    }
}